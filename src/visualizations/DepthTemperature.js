import React, {useEffect, useState} from 'react'
import * as d3 from 'd3'
import tip from 'd3-tip'
import idgen from "../utils/idgen";

export const DepthTemperature = (props) => {
    const [id] = useState(idgen());
    const [graphic, setGraphic] = useState(null)
    const prepareData = (data) => {
        let stations = data.reduce(
            (entryMap, e) => entryMap.set(e['Station.Number'], [...entryMap.get(e['Station.Number']) || [], e]),
            new Map()
        );

        let reducedData = []
        let dataList = []

        for (let s of stations.keys()) {
            const res = {"Station.Number": s, "Measures": []}
            const entries = stations.get(s)
            let depths = entries.reduce(
                (entryMap, e) => entryMap.set(e['Depth'], [...entryMap.get(e['Depth']) || [], e]),
                new Map()
            );
            for (let d of depths.keys()) {
                const measures = depths.get(d)
                const avg = (measures.reduce((total, next) => total + next['Temperature'], 0) / measures.length).toFixed(1)
                res['Measures'].push({"Depth": d, "Temperature": avg})
                dataList.push({"Station.Number": s, "Depth": d, "Temperature": avg}
                )
            }
            res['Measures'].sort((a, b) => (a['Depth'] > b['Depth']) ? -1 : 1);
            reducedData.push(res)
        }
        reducedData.sort((a, b) => (a['Station.Number'] > b['Station.Number']) ? 1 : -1);

        return reducedData
    }

    useEffect(() => {
        document.getElementById(id).innerHTML = ""
        const data = prepareData(props.data)
        const depths = data.map(d => d['Measures']).reduce((a, b) => a.concat(b), []).map(m => m['Depth'])
        const maxDepth = depths.reduce((a, b) => a > b ? a : b, 0)
        console.log("Data", data)

        // set the dimensions and margins of the graph
        var margin = {top: 40, right: 20, bottom: 20, left: 40},
            width = props.width - margin.left - margin.right,
            height = props.height - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select(`#${id}`)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        var colorScale = d3.scaleSequential(d3.interpolateRdYlBu)
            .domain([30, 0]);

        // x axis
        var x = d3.scaleBand()
            .domain(data.map(d => d['Station.Number']))
            .range([0, width])
            .padding([0.3])
        svg.append("g")
            .call(d3.axisTop(x).tickSizeOuter(0));

        // x axis label
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", -20)
            .text("Station Number");

        // y axis
        var y = d3.scaleLinear()
            .domain([maxDepth, 0])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        //y axis label
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("x", -height + 50)
            .attr("y", -35)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Depth");

        // tooltip
        let t = tip().attr('class', 'd3-tip')
            .html(function(d) { const dat = d.toElement.__data__; return dat['Depth'] + "m: " + dat['Temperature'] + "°C" ; }).offset([20, 0]);
        svg.call(t);

        // bar groups
        var bar = svg.append("g").selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
                return "translate(" + x(d['Station.Number']) + ", 0)";
            });

        // bars
        bar.selectAll("rect")
            .data(d => d['Measures'])
            .enter()
            .append("rect")
            .attr("y", 1)
            .attr("height", function (d) {
                return y(d['Depth']);
            })
            .attr("width", x.bandwidth())
            .style("fill", function (d) {
                return colorScale(d['Temperature']);
            })
            .on('mouseover', t.show)
            .on('mouseout', t.hide);

        setGraphic(svg)
    }, [props.data])
    return (
        <div>
            <h3>Temperature from low to high</h3>
            <div id={id}></div>
        </div>
    )
}

DepthTemperature.defaultProps = {width: 700, height: 500}

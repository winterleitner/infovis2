import React, {useEffect, useState} from 'react'
import * as d3 from 'd3'
import tip from 'd3-tip'
import idgen from "../utils/idgen";

export const DateTemperature = (props) => {
    const [id] = useState(idgen());
    const [graphic, setGraphic] = useState(null)

    const prepareData = (data) => {
        return data
    }
    useEffect(() => {
        document.getElementById(id).innerHTML = ""
        const data = prepareData(props.data)

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

        // var colorScale = d3.scaleSequential(d3.interpolateRdYlBu)
        //     .domain([30, 0]);

        // x axis
        var x = d3.scaleBand()
            .domain(data.map(d => d['TimeStamp']))
            .range([0, width])
            .padding([0.3])
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // x axis label
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", -20)
            .text("Date");

        // y axis
        var y = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return + d.Temperature; })])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        //y axis label
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "center")
            .attr("x", -height + 50)
            .attr("y", -35)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Temperature");

        // tooltip
/*        let t = tip().attr('class', 'd3-tip')
            .html(function(d) { const dat = d.toElement.__data__; return dat['Depth'] + "m: " + dat['Temperature'] + "°C" ; }).offset([20, 0]);
        svg.call(t);*/

        // Add the line
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function(d) { return x(d['TimeStamp']) })
                .y(function(d) { return y(d['Temperature']) })
            )

        setGraphic(svg)
    }, [props.data])
    return (
        <div>
            <h3>Temperature over time</h3>
            <div id={id}></div>
        </div>
    )
}

DateTemperature.defaultProps = {width: 700, height: 500}

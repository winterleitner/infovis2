import React, {useEffect, useState} from 'react'
import * as d3 from 'd3'
import idgen from "../utils/idgen";

export const Test = (props) => {
    const [id] = useState(idgen());
    useEffect(() => {
        const data = [{"Station.Number": 12, "Depth": 5}, {"Station.Number": 5, "Depth": 20}, {
            "Station.Number": 5,
            "Depth": 30
        }];
        const svg = d3.select(`#${id}`).append("svg").attr("width", props.width).attr("height", props.height);
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", (d, i) => d["Depth"] * 5)
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d['Station.Number'])
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => (6 * d['Depth']) + 10)
    }, [])


    return (
        <div id={id}></div>
    )
}

Test.defaultProps = {width: 700, height: 300}

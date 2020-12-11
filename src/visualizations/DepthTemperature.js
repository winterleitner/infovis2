import React, {useEffect, useState} from 'react'
import * as d3 from 'd3'
import idgen from "../utils/idgen";

export const DepthTemperature = (props) => {
    const [id] = useState(idgen());
    const [graphic, setGraphic] = useState(null)
    useEffect(() => {
        const svg = d3.select(`#${id}`).append("svg").attr("width", props.width).attr("height", props.height);
        svg.selectAll("rect")
            .data(props.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", (d, i) => d['Temperature'])
            .attr("fill", "green");
        setGraphic(svg)
    },[])
    return (
        <div id={id}></div>
    )
}

DepthTemperature.defaultProps = {width: 700, height: 300}

import React, {useEffect, useState} from 'react'
import * as d3 from 'd3'
import idgen from "../utils/idgen";

export const Test = (props) => {
    const [id] = useState(idgen());
    useEffect(() => {
        const data = [12, 5, 6, 6, 9, 10];
        const svg = d3.select(`#${id}`).append("svg").attr("width", props.width).attr("height", props.height);
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", (d, i) => d*10)
            .attr("fill", "green");
        },[])


    return (
        <div id={id}></div>
    )
}

Test.defaultProps = {width: 700, height: 300}

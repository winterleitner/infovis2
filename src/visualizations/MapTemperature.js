import React, {useState, useEffect}  from 'react'
import idgen from "../utils/idgen";
import * as d3 from "d3";
import tip from "d3-tip";
import papa from "papaparse";
import moment from "moment";


const MapTemperature = props => {
    const [id] = useState(idgen());
    const [stations, setStations] = useState([])
    const [selected, setSelected] = useState(null)
    const [preparedData, setPreparedData] = useState([])


    const prepareData = (data, coords) => {
        let stations = data.reduce(
            (entryMap, e) => entryMap.set(e['Station.Number'], [...entryMap.get(e['Station.Number']) || [], e]),
            new Map()
        );

        let reducedData = []

        for (let s of stations.keys()) {
            const entries = stations.get(s)

            const avgTemp = (entries.reduce((total, next) => total + next['Temperature'], 0) / entries.length).toFixed(1) + " °C"
            const avgExtinction = (entries.reduce((total, next) => total + next['Measured.Extinction.Coefficient'], 0) / entries.length).toFixed(1)
            const avgBackscatter = (entries.reduce((total, next) => total + next['Optical.Backscatter'], 0) / entries.length).toFixed(1)
            const avgSalinity = (entries.reduce((total, next) => total + next['Salinity'], 0) / entries.length).toFixed(1)
            const maxDepth = entries.map(m => m['Depth']).reduce((a, b) => a > b ? a : b, 0) + "m"

            let station
            let st = coords.filter(c => c['station'] === s)
            if (st.length > 0) {
                station = st[0]
            }
            else station = {"x": 0, "y": 0}

            const res = {"Station.Number": s,
                "x": station['x'],
                "y": station['y'],
                "Temperature": avgTemp,
                "Measured.Extinction.Coefficient": avgExtinction,
                "Optical.Backscatter": avgBackscatter,
                "Salinity": avgSalinity,
                "MaximumDepth": maxDepth
            }
            reducedData.push(res)
        }
        reducedData.sort((a, b) => (a['Station.Number'] > b['Station.Number']) ? 1 : -1);

        setPreparedData(reducedData)
        return reducedData
    }

    const notifyData = (id) => {
        const results = preparedData.filter(d => d['Station.Number'] == id)
        if (results.length == 0) return
        const result = results[0]
        delete result['x']
        delete result['y']
        props.notify(results[0])
    }

    useEffect(() => {
        papa.parse("infovis2/img_coords.csv", {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: function (results, file) {
                setStations(results.data)
            }
        })
    }, [])

    useEffect(() => {
        document.getElementById(id).innerHTML = ""
        const data = prepareData(props.data, stations)
        console.log("Data", data)

        var svg = d3.select(`#${id}`)
            .append("svg")
            .attr("width", 730)
            .attr("height", 1053);
        // loop through stations
        for (let s of data) {
            var area = document.createElement('area');
            area.setAttribute('shape', 'circle');
            area.setAttribute('title', 'Station ' + s['Station.Number']);
            var coords = s['x'] + ',' + s['y'] + ',10';
            area.setAttribute('coords', coords);
            area.setAttribute('href', 'javascript:showStation("' + s['Station.Number']+ '");');
            // add area to imagemap
            // image_map.appendChild(area);
            // add rectangular
            svg.append("circle")
                .attr("id", "station-" + s['Station.Number'])
                .attr("cx", s['x'])
                .attr("cy", s['y'])
                .attr("r", "5")
                //.on("click", setSelected(s['Station.Number']))
                .on("click", () => notifyData(s['Station.Number']))
                .attr("fill", "red")
        }
    }, [props.data, stations])

    return (
        <div>
            <h3>Temperature visualized on a map</h3>
            <div id={id} style={{"background": "url(infovis2/bay.jpeg)"}}/>
        </div>
    )
}

export default MapTemperature
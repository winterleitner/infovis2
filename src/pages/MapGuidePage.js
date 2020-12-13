import React, {useState} from 'react'
import MapGuide from "../visualizations/MapGuide";
import {Row, Col} from "reactstrap";
import FilterComponent from "../filtering/FilterComponent";

const MapGuidePage = props => {
    // holds list of filter functions
    const [filters, setFilters] = useState([])
    const filtered_data = () => {
        let data = props.data
        for (let f of filters) {
            data = f.filter(data)
        }
        return data
    }
    const addFilter = (filter) => {
        setFilters([...filters, filter])
    }

    const removeFilter = (filter) => {
        setFilters(filters.filter(fil => filter != fil))
    }

    const [measures, setMeasures] = useState({})

    return (
        <Row>
            <Col xs="8" className="visualization-panel">
                <MapGuide data={filtered_data()} notify={(data) => setMeasures(data)}/>
            </Col>
            <Col xs="4" className="control-panel">
                <FilterComponent filters={filters} addFilter={addFilter} removeFilter={removeFilter} matchCount={filtered_data().length} attributes={props.attributes}/>
                <div>
                    <hr/>
                    <h4>Average measures for last selection</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Measure</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(measures).map(k =>
                            <tr>
                                <td>{k}</td>
                                <td>{measures[k].toString()}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>)
}
export default MapGuidePage


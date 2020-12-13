import React, {useState, useRef} from 'react'
import {DepthTemperature} from "../visualizations/DepthTemperature";
import {DateTemperature} from "../visualizations/DateTemperature";
import {Row, Col, Badge, Button, Input, Label} from "reactstrap";
import Filter from "../utils/filter";
import FilterComponent from "../filtering/FilterComponent";

const DepthTemperaturePage = props => {
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

    return (
        <Row>
            <Col xs="8" className="visualization-panel">
                <DepthTemperature data={filtered_data()}/>
                <DateTemperature data={filtered_data()}/>
            </Col>
            <Col xs="4" className="control-panel">
                <FilterComponent filters={filters} addFilter={addFilter} removeFilter={removeFilter} matchCount={filtered_data().length} attributes={props.attributes}/>
            </Col>
        </Row>)
}
export default DepthTemperaturePage


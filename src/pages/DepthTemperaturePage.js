import React, {useState, useRef} from 'react'
import {DepthTemperature} from "../visualizations/DepthTemperature";
import {Row, Col, Badge, Button, Input, Label} from "reactstrap";
import Filter from "../utils/filter";

const DepthTemperaturePage = props => {
    // holds list of filter functions
    const [filters, setFilters] = useState([])
    const attribute = useRef(null)
    const comparator = useRef(null)
    const threshold = useRef(null)
    const filtered_data = () => {
        let data = props.data
        for (let f of filters) {
            data = f.filter(data)
        }
        return data
    }
    const addFilter = () => {
        const attr = attribute.current.value
        const comp = comparator.current.value
        const thres = threshold.current.value
        if (thres.length == 0) return
        const f = new Filter(attr, comp, thres)
        setFilters([...filters, f])
    }
    return (
        <Row>
            <Col xs="8" className="visualization-panel">
                <DepthTemperature data={filtered_data()}/>
            </Col>
            <Col xs="4" className="control-panel">
                <Row>
                    <Col xs="12"><strong>Filters</strong><small> (click to remove)</small></Col>
                    <Col xs="12">
                        {filters.map(f => <Badge className="m-1" color="success"
                                                 onClick={() => setFilters(filters.filter(fil => f != fil))}>{f.toString()}</Badge>)}
                    </Col>
                </Row>
                <Row>
                    <Col className="pl-3"><small>{filtered_data().length} rows match filters.</small></Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs="12"><strong>Add Filter</strong></Col>
                </Row>
                <Row className="mt-1">
                    <Col xs="3">Attribute</Col>
                    <Col xs="9">
                        <Input innerRef={attribute} type="select">
                            {props.attributes.map(o => <option value={o}>{o}</option>)}
                        </Input>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col xs="3">Comparator</Col>
                    <Col xs="9">
                        <Input innerRef={comparator} type="select">
                            {["==", "<", "<=", ">", ">="].map(o => <option value={o}>{o}</option>)}
                        </Input>
                    </Col>
                </Row>
                <Row className="mt-1 mb-2">
                    <Col xs="3">Threshold</Col>
                    <Col xs="9">
                        <Input innerRef={threshold} type="text" placeholder={"[for dates use: yyyy-mm-dd]"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Button block onClick={() => addFilter()}>Add
                            Filter</Button>
                    </Col>
                </Row>
            </Col>
        </Row>)
}
export default DepthTemperaturePage


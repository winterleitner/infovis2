import React, {useEffect, useRef, useState} from "react";
import {Badge, Button, Col, Input, Row} from "reactstrap";
import Filter from "../utils/filter";

const FilterComponent = props => {
    const attribute = useRef(null)
    const comparator = useRef(null)
    const threshold = useRef(null)

    const removeFilter = (filter) =>  {
        props.removeFilter(filter)
    }

    const addFilter = () => {
        const attr = attribute.current.value
        const comp = comparator.current.value
        const thres = threshold.current.value
        if (thres.length == 0) return
        const f = new Filter(attr, comp, thres)
        props.addFilter(f)
    }

    return (
        <div className="control-panel">
            <Row>
                <Col xs="12"><strong>Filters</strong><small> (click to remove)</small></Col>
                <Col xs="12">
                    {props.filters.map(f => <Badge className="m-1" color="success"
                                             onClick={() => removeFilter(f)}>{f.toString()}</Badge>)}
                </Col>
            </Row>
            <Row>
                <Col className="pl-3"><small>{props.matchCount} rows match filters.</small></Col>
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
                    <Button block onClick={addFilter}>Add
                        Filter</Button>
                </Col>
            </Row>
        </div>
    )
}

export default FilterComponent
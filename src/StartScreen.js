import React from 'react'
import logo from "./logo.svg";
import { Link } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";

export const StartScreen = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Nuclear <code>diving</code> decision support system.
                </p>
                {props.loading ? <><small>Please wait while the CSV-File is parsed...</small><br/><ClockLoader css="margin: 0 auto;"/></> :
                <Link to="/welcome" className="btn btn-danger">Enter Page and see visualizations</Link>}
            </header>
        </div>
    )
}
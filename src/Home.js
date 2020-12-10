import React from 'react'
import logo from "./logo.svg";
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Nuclear <code>diving</code> decision support system.
                </p>
                <Link to="/vis" className="btn btn-danger">Enter Page and see visualizations</Link>
            </header>
        </div>
    )
}
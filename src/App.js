import './App.css';
import React, {useEffect, useState} from 'react'
import {Route} from 'react-router';
import {Home} from "./Home";
import {Test} from "./Test";
import papa from "papaparse";

const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        papa.parse("infovis2/SFBay.csv", {
            download: true,
            header: true,
            complete: function(results, file) {
                setData(results.data)
            }})
    }, [])
    return (
        <div>
            <Route path="/vis" render={() => <Test data={data}/>}/>
            <Route exact path="/" render={() => <Home data={data}/>}/>
        </div>
    );
}

export default App;

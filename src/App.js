import './App.css';
import React, {useEffect, useState} from 'react'
import {Route} from 'react-router';
import {StartScreen} from "./StartScreen.js";
import {Test} from "./visualizations/Test";
import papa from "papaparse";
import Layout from "./Layout";
import Welcome from "./pages/Welcome";
import moment from 'moment'
import DepthTemperaturePage from "./pages/DepthTemperaturePage";
import MapGuidePage from "./pages/MapGuidePage";

const App = () => {
    const [data, setData] = useState([])
    const [attributes, setAttributes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        papa.parse("infovis2/SFBay.csv", {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: function (results, file) {
                let parsed = results.data.map(r => {return {...r, 'TimeStamp': moment(r['TimeStamp']).toDate()}})
                parsed.pop()
                setData(parsed)
                setAttributes(Object.keys(parsed[0]))
                setLoading(false)
            }
        })
    }, [])
    return (
        <>
            <Route exact path="/" render={() => <StartScreen data={data} loading={loading}/>}/>

            <Layout>
                <Route exact path="/welcome" render={() => <Welcome data={data}/>}/>
                <Route exact path="/dt" render={() => <DepthTemperaturePage data={data} attributes={attributes}/>}/>
                <Route exact path="/map" render={() => <MapGuidePage data={data} attributes={attributes}/>}/>
            </Layout>

        </>
    );
}

export default App;

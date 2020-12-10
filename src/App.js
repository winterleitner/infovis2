import './App.css';
import React, {useEffect, useState} from 'react'
import {Route} from 'react-router';
import {StartScreen} from "./StartScreen.js";
import {Test} from "./visualizations/Test";
import papa from "papaparse";
import Layout from "./Layout";
import Welcome from "./pages/Welcome";
import moment from 'moment'

const App = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        papa.parse("infovis2/SFBay.csv", {
            download: true,
            header: true,
            complete: function (results, file) {
                let parsed = results.data.map(r => {return {...r, 'TimeStamp': moment(r['TimeStamp']).toDate()}})
                parsed.pop()
                setData(parsed)
                setLoading(false)
            }
        })
    }, [])
    return (
        <>
            <Route exact path="/" render={() => <StartScreen data={data}/>}/>

            <Layout>
                <Route exact path="/welcome" render={() => <Welcome data={data} loading={loading}/>}/>
                <Route exact path="/vis" render={() => <Test data={data}/>}/>
            </Layout>

        </>
    );
}

export default App;

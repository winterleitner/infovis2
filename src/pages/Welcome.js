import React from 'react'
import ClockLoader from 'react-spinners/ClockLoader'

const Welcome = props => {
    // Loading text
    if (props.loading)
        return (
            <div>
                <h1>Welcome to the Diving Support System Visualization Page</h1>
                <p>Please wait while the page is loading. This might take some time, since a large number of items are being parsed from CSV in real time.</p>
                <ClockLoader css="margin: 0 auto;"/>
            </div>
        )
    console.log(props.data.slice(1).slice(-5))
    return (
        <div>
            <h1>Welcome to the Diving Support System Visualization Page</h1>
            <p>Here, our sample visualizations for the use case of scuba diving in the San Francisco Bay area are
                presented.</p>
            <p>The dataset in use can be obtained from: <a href="infovis2/SFBay.csv">SFBay.csv</a></p>
            <p>It consists of {props.data.length} data entries recorded from {props.data[0]['TimeStamp'].toLocaleDateString("de-DE")} to {props.data[props.data.length - 1]['TimeStamp'].toLocaleDateString("de-DE")} in the San Francisco Bay area.</p>
        </div>
    )
}

export default Welcome
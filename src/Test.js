import React from 'react'

export const Test = (props) => <div>{props.data.slice(0, 10000).map(x => <p>{x.TimeStamp}</p>)}</div>

import React from 'react'
var moment = require('moment');

export default function Day (props) {
  let newDate = new Date()
  const weekday = props.reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owf owf-${props.reading.weather[0].id} owf-5x`

  return (
      <div className="col-sm-3">
          <div className="card">
              <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
              <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
              <i className={imgURL}></i>
              <h2>{Math.round(props.reading.main.temp)} °C</h2>
              <h4>Min:{Math.round(props.reading.main.temp_min)} °C</h4>
              <h4>Max:{Math.round(props.reading.main.temp_max)} °C</h4>
              <div className="card-body">
                  <p className="card-text">{props.reading.weather[0].description}</p>
              </div>
          </div>
      </div>
  )
}

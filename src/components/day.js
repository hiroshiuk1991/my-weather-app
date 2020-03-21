import React from 'react'
import WeatherIcon from 'react-icons-weather';
var moment = require('moment')

export default function Day (props) {
  let newDate = new Date()
  const weekday = props.reading.dt * 1000
  newDate.setTime(weekday)


  return (
    <div className='col-sm-4'>
      <div className='card'>
        <h3 className='card-title'>{moment(newDate).format('dddd')}</h3>
        <p className='text-muted'>
          {moment(newDate).format('MMMM Do, h:mm a')}
        </p>
        <WeatherIcon name='owm' iconId={props.reading.weather[0].id} flip="horizontal" rotate="90" />

        <h1>{Math.round(props.reading.main.temp)} °C</h1>
        <h5>Min:{Math.round(props.reading.main.temp_min)} °C</h5>
        <h5>Max:{Math.round(props.reading.main.temp_max)} °C</h5>
        <div className='card-body'>
          <h2 className='card-text'>{props.reading.weather[0].description}</h2>
        </div>
      </div>
    </div>
  )
}

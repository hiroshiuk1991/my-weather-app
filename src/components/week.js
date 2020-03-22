import React from 'react'

import Day from './Day'

class Week extends React.Component {
  formatDayCards = () => {
    return this.props.dailyData.map((reading, index) => (
      <Day reading={reading} key={index} />
    ))
  }

  render () {
    return (
      <div className='container'>
        <div>
          <h1 className='display-2 jumbotron'> 5 day Forecast</h1>
          <h2 className='p-3 mb-2 bg-primary text-white'>City: {this.props.city}</h2>
        </div>
          
        <div className='row justify-content-center'>
          {this.formatDayCards()}
        </div>
      </div>
    )
  }
}

export default Week

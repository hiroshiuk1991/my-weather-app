import React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Week from './components/Week'
import Header from './components/Header'

class App extends React.Component {
  state = {
    city: 'london',
    fullData: [],
    dailyData: []
  }

handleErrors(response) {
  if (!response.ok) {
    throw Error(alert("Looks like thats not a city! Try again")) 
  //  (alert('Looks like thats not a city!'))
  }
  return response;
}

  clickToFetch () {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast/?q=${this.state.city},us&units=metric&APPID=e99ca77694fc417787cf2fa55f6155de`
    )
    .then(this.handleErrors)
      .then(res => res.json())  
      .then(data => {
        const dailyData = data.list.filter(reading =>
          reading.dt_txt.includes('18:00:00')
        )
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        })
      })
  }

  handleNewCity = e => {
    this.setState({ city: e.target.value })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Week
          dailyData={this.state.dailyData}
          city={this.state.city}
          handleNewCity={this.handleNewCity}
        />
        <br/>
        <div>
          <TextField
            onChange={this.handleNewCity}
            id='outlined-search'
            label='Search Location'
            type='search'
            variant='outlined'
          >
            <input type='text' name='city' placeholder='City...' />
          </TextField>
        </div>
        <br/>
        <div>
          <Button
            className='button'
            variant='outlined'
            size='large'
            color='primary'
            onClick={e => this.clickToFetch(e)}
          >
            Get Weather
          </Button>
        </div>
       <div><br/></div>
      </div>
    )
  }
}

export default App

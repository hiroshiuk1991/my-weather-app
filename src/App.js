import React from 'react'
import './App.css'
// import Form from './components/Form'
import Week from './components/Week'
import Header from './components/Header'

class App extends React.Component {
  state = {
    city: 'london',
    fullData: [],
    dailyData: []
  }

  // componentDidMount
  clickToFetch (e) {
    // e.prevent.default()
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/?q=${this.state.city}&APPID=e99ca77694fc417787cf2fa55f6155de`
    )
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading =>
          reading.dt_txt.includes('18:00:00')
        )
        this.setState(
          {
            fullData: data.list,
            dailyData: dailyData
          }
          // () => console.log(this.state)
        )
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
        <div>
          <form onChange={this.handleNewCity}>
            <input type='text' name='city' placeholder='City...' />
          </form>
          <button onClick={e => this.clickToFetch(e)}>Get Weather</button>
        </div>
      </div>
    )
  }
}

export default App

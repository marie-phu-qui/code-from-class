import React from 'react'
import {getSatellite, getSatellites} from '../iss-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      satellites: [],
      selectedSatellite: ''
    }

    this.getSatellites = this.getSatellites.bind(this)
    this.getSatellite = this.getSatellite.bind(this)
  }

  componentDidMount() {
    this.getSatellites()
  }

  getSatellites() {
    getSatellites()
    .then(res => {
      this.setState({
        satellites: res.body
      })
    })
  }

  getSatellite(satId) {
    getSatellite(satId)
    .then(res => {
      this.setState({
        selectedSatellite: res.body
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Satellites</h1>
        {this.state.satellites.length > 0 && <ul style={{listStyle: 'none'}}>
          {this.state.satellites.map(sat => {
            return <li key={sat.id}><button onClick={() => this.getSatellite(sat.id)}>{sat.name}</button></li>
          })}
        </ul>}

        <p>
          {this.state.selectedSatellite.velocity}
        </p>
      </div>
    )
  }
}

export default App

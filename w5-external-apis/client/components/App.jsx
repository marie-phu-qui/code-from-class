import React from 'react'
import {getJoke, searchJoke} from '../api-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      jokes: '',
      // queryList: [],
      categories: []
    }

    this.getJoke = this.getJoke.bind(this)
    this.searchJoke = this.searchJoke.bind(this)
  }

  componentDidMount() {
    this.getJoke()
  }

  getJoke() {
    getJoke()
    .then(res => {
      this.setState({
        jokes: res.body
      })
    })
  }

  getCategories() {
    this.getCategories()
    .then(res => {
      this.setState({
        categories: res.body
      })
    })
  }

  // getSatellite(satId) {
  //   getSatellite(satId)
  //   .then(res => {
  //     this.setState({
  //       selectedSatellite: res.body
  //     })
  //   })
  // }

  // searchJoke(specialSearch){
  //   searchJoke(specialSearch)
  //   .then(res => {
  //     this.setState({
  //       queryList: res.body
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        {console.log('hello?')}
        <h1>Make me Chuckle</h1>
      
        <p>
          {this.state.jokes.value}
        </p>

        <ul> categories</ul>


        {/* <form>
          <input name='specialSearch' placeholder='Careful what you wish for...' value='query' type='text'></input>
          <input value='submit' type='button' onClick={searchJoke(query)}>Send it</input>
        </form> */}

         {/* {this.state.queryList.length > 0 && <ul style={{listStyle: 'none'}}>
          {this.state.queryList.map(joke => {
            return <li key={joke.id}><button onClick={() => this.searchJoke(joke.id)}>{joke.value}</button></li>
          })}
        </ul>} */}
      
      </div>
    )
  }
}

export default App

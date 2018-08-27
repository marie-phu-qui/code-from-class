import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log('I am rendering ' + new Date())
    return (
      <div>
        <h1>React development has begun!</h1>
        <p>This counter says: {this.state.counter}</p>
        <button onClick={this.handleClick}>This is a button!</button>
      </div>
    )
  }
}

export default App

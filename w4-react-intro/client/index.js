import React from 'react'
import ReactDOM from 'react-dom'

function helloTemplate (props) {
  let fruit = ['bananas', 'apples', 'pears']
  // fruit = []
  return (
    <div>
      <div>hello {props.name}</div>
      <ChildTemplate name={props.name} fruit={fruit}/>
    </div>
  )
}

function ChildTemplate(props) {
  return (
    <ChildChildTemplate name={props.name} fruit={props.fruit} />
  )
}

function ChildChildTemplate(props) {
  return (
    <p>
      This is some text in a child component/template!!! <br/>
      I have a name {props.name}<br/>
    <FruitList fruit={props.fruit}/>
    </p>
  )
}

function FruitList(props) {
  return (
    props.fruit.length > 0 ? <ul>
      {props.fruit.map(oneFruit => {
        return <li>{oneFruit}</li>
      })}
    </ul> : "I have no fruit"
  )
}

const data = {name: 'humans'}
const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

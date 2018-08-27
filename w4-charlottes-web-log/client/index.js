import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const message = {text: "Future home of Charlotte's web"}

const fruit = ['apples', 'oranges', 'pears']

ReactDOM.render(
  <App message={message} fruit={fruit} />,
  document.getElementById('root')
)

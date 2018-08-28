import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import AnimalList from './AnimalList'
import AnimalNouns from './AnimalNouns'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={Home} />
        <Route exact path="/" component={AnimalList} />

        {/*<Route path="/:animal/nouns" component={AnimalNouns} />*/}

        <Route path="/:animal/nouns" render={props => {
          return <AnimalNouns { ...props } thisOne="stuff"/>
        }} />

      </React.Fragment>
    </Router>
  )
}

export default App

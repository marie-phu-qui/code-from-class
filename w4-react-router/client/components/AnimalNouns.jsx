import React from 'react'
import {Link} from 'react-router-dom'

import {list_of_animals as animals} from '../../data/animals.json'

const AnimalNouns = props => {
  let selectedAnimalData = animals.find(animalData => {
    return animalData.animal == props.match.params.animal
  })

  return (
    <React.Fragment>
    <h1>{selectedAnimalData.animal}</h1>
    <ul>
      {selectedAnimalData.nouns.map(noun => {
        return <li key={noun}>{noun}</li>
      })}
    </ul>
    <Link to="/">Back</Link>
  </React.Fragment>
  )
}

export default AnimalNouns

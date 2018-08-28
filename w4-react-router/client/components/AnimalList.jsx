import React from 'react'
import {Link} from 'react-router-dom'

import {list_of_animals as animals} from '../../data/animals.json'

const AnimalList = () => {
  return (
    <ul style={{listStyle: 'none'}}>
      {animals.map(animalData => {
        return <li key={animalData.animal}><Link to={`/${animalData.animal}/nouns`}>{animalData.animal}</Link></li>
      })}
    </ul>
  )
}

export default AnimalList

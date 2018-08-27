import React from 'react'
import ReactDOM from 'react-dom'

// function App (props) {
//   return (
//     <div>
//       <h1>{props.message.text}</h1>
//       <ul>
//         {props.fruit.map((oneFruit, i) => {
//           return (
//             <li key={'fruit-' + i}>
//               {oneFruit}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// ^---- this is the same as this -----\/

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.message.text}</h1>
        <ul>
          {this.props.fruit.map((oneFruit, i) => {
            return (
              <li key={'fruit-' + i}>
                {oneFruit}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default App

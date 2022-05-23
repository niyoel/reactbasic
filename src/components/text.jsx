import React, { Component } from 'react'
import NavBar from './NavBar'
class Text extends Component {
  state = {
    etudiants: [
      { name: 'Zelda', id: 1 },
      { name: 'Bobid:', id: 2 },
      { name: 'Salama', id: 3 },
      { name: 'Bonjour', id: 4 },
      { name: 'Hello', id: 5 },
    ],
  }
  render() {
    return (
      <>
        <NavBar />
        <ul class="list-group-item">
          {this.state.etudiants.map((etudiant) => {
            if (etudiant.name === 'Bob') {
              return (
                <li class="list-group-item" key={etudiant.id}>
                  Bob interdit
                </li>
              )
            } else {
              return (
                <li class="list-group-item" key={etudiant.id}>
                  {etudiant.name}{' '}
                </li>
              )
            }
          })}
        </ul>
      </>
    )
  }
}

export default Text

import React from 'react';
const Etudiants = (props) => {
    return (<h1> <ul class="list-group-item">
    {props.etudiants.map((etudiant) => {
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
  </ul></h1>);
  
}
   
export default Etudiants;

import React from 'react'
import Text from './text'
const Classements = (props) => {
  const sort_class = props.classements.sort((a, b)  => a.score > b.score )
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {sort_class.map((classement) => (
          <tr>
            <th scope="row">{sort_class.indexOf(classement) + 1}</th>
            <td style={{color:"blue"}}>{classement.nom}</td>
            <td>{classement.prenom}</td>
            <td>{classement.score}</td>
            <td> <button onClick={()=>props.onDelete(classement)} className='btn btn-danger'>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Classements

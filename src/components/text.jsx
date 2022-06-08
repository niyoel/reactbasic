import React, { Component } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import NavBar from './NavBar'
import Etudiants from './etudiants'
import Notifications from './notifications'
import Cards from './cards'
import Classements from './classement'
import { getPlayers } from '../services/fakedatabase';
class Text extends Component {
  state = {
    etudiants: [
      { name: 'Zelda', id: 1 },
      { name: 'Bobid', id: 2 },
      { name: 'Salama', id: 3 },
      { name: 'Bonjour', id: 4 },
      { name: 'Hello', id: 5 },
    ],
    notif: 0,
    classements:getPlayers()
    }
    handleNotification=()=>{
      this.setState({notif:this.state.notif+1})
  }
  handleDelete=classement=>{
   const classementscopy=[...this.state.classements]
   const classements = classementscopy.filter(c=>c!==classement)
   this.setState({classements})
  }
  render() {
    return (
      <>
       <BrowserRouter>
       <NavBar  handleNotification={this.handleNotification} 
          notif= {this.state.notif}/>
       <Routes>
       <Route path="/etudiants" element={<Etudiants etudiants={this.state.etudiants} />}/>
       <Route path="/cards" element={<Cards />}/>
       <Route path="/classements" element={<Classements onDelete={this.handleDelete}  classements={this.state.classements} />}/>


          {/* <NavBar />
          <Etudiants etudiants={this.state.etudiants}/>
          <Notifications 
          handleNotification={this.handleNotification} 
          notif= {this.state.notif}/>
          <Cards/>
          <Classements classements={this.state.classements}/> */}
        </Routes>
      </BrowserRouter>
      
      </>
    )
  }
}

export default Text

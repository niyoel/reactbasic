import React from 'react';
import { Link } from "react-router-dom";
import Notifications from '../components/notifications';


const NavBar = (props) => {
  return (  
  <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {/* <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to= "notifications">Notifications</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to= "etudiants">Etudiants</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to= "classements">Classement</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to= "cards">Cards</Link>
        </li>
        <Notifications handleNotification={props.handleNotification} 
          notif= {props.notif}/>
      </ul>
    </div>
  </div>
</nav>
</>
);
}
 
export default NavBar;
import React, { Component } from 'react'
import App from '../App';
const Notifications = (props) => {
  return ( 
  <>

<button onClick={props.handleNotification} type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">{props.notif}</span>
</button>
  {/* <button onClick={props.handleNotification} type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-danger">{props.notif}</span> 
  </button> */}
  </>
  
  )
}
 
export default Notifications;


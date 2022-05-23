import React, { Component } from 'react'
import Count from "./components/count"
import './App.css'
class App extends Component {
    state = {
      count: 0,
      isPremium:false
    }
  
  incrementation=()=>{
    this.setState({ count: this.state.count+1 })
  }
  connection=()=>{this.setState({isPremium:!this.state.isPremium})}

 affichage=()=> {
    const {count}=this.state
    return (
      <div><h1>Salut</h1>
      <p className={count<10?"red":"green"}>{count}</p>
      <p>{count>5 ? "+5":null}</p>
      <p>{count===8 ? "BRAVO":null}</p>
      
      <button onClick={this.incrementation}>increment</button></div>  
    )  
}

render(){
    return(
        <>
        <Count 
        connection={this.connection}
        affichage={this.affichage}
        isPremium={this.state.isPremium}/>

        </>
    )
}
}
export default App



import "./App.css";
import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.userRef = React.createRef()
  }
 
  editVal() {
    // alert('hello')
    // console.log(this.userRef)

    // this.userRef.current.focus()
    this.userRef.current.value = '100000'
  }
  render() {
    return (
      <div className="App">
        {/*  Ref ki help se ap Dom ko directly modify kar sakty ho bhot bar apko zarorat parti ha jab ap forms banaty ho kisi text box ka color change karty ho bhot sari aisy cheezy jab apko is ki zarorat parti ha */}
        {/* Offical Docs "Ref and the DOM" */}

        {/* When to Use Refs 

        There are a few good use cases for refs
        
        1)Managing focus, text selection, or media playback.
        2)Triggering imperative animations.
        3)Integrating with third-party DOM libraries
        */}
        <h1>What is Ref in React</h1>
        {/* input pe buton k click par focus hoajye ga */}
        <input ref={this.userRef} type="text" name="user" id="" />
        <button onClick={()=> this.editVal()}>Clcik me</button>
      </div>
    );
  }
}
export default App;

import logo from "./logo.svg";
import "./App.css";
import React from "react";
class App extends React.Component {

  constructor(){
    super();
    this.state={
      name:'',
      password:'',
      nameError:'',
      passwordError:''
    }
  }
  valid(){
    if(!this.state.name.includes('@') && this.state.password.length < 5){
      this.setState({
        nameError:'Invalid Name',
        passwordError:'Password length should be more than 5'
      
      })
    }
    if(!this.state.name.includes('@')){
      this.setState({
        nameError:'Invalid Name'
      })
    }
    if(!this.state.password.length > 5){
      this.setState({
        passwordError:'Password length should be more than 5'
      })
    }else {
      return true
    }
  }
  submit(){
      this.setState({
        nameError:'',
        passwordError:''
      })
    if(this.valid()){
      alert ('Form has been submit')
    }
  } 
  render() {
    return (
      <div className="App">
        {/* <Forms/> */}
        <h1>Form Validation</h1>
        <input type="text" name="name" onChange={(events)=>{this.setState({name:events.target.value})}} placeholder="User Name" />
        <p style={{color:'red',fontSize:'14px'}} className="prede">{this.state.nameError}</p>
        <input type="Password" name="password" onChange={(events)=>{this.setState({name:events.target.value})}} placeholder='Password' />
        <p style={{color:'red',fontSize:'14px'}}>{this.state.passwordError}</p>
        <br />
        <button onClick={()=>this.submit()}>Submit</button>
      </div>
    );
  }
}
export default App;

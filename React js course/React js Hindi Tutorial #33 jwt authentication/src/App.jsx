import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      login: false,
      store: null,
    };
  }
  componentDidMount(){
    this.storeCollector()
  }
  storeCollector(){
    console.log('Hello from storeCollector')
      let store = JSON.parse(localStorage.getItem('login'));
      this.setState({store:store})
      if( store && store.login){
      this.setState({login:true})
    }
    // console.log('store=>',store)
  }
  login() {
    // console.log('Form-Data=>',this.state)
    // alert("Hello world!");
    fetch("https://reqres.in/api/users?page=2", {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result=>", result);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: result.id,
          })
        );
        this.setState({ login: true })
        this.storeCollector()
      });
    });
  }
  post(){
    // console.log(this.state.post)
    let token = `Bearer ${this.state.store.token}` 
    console.log(token)
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        'Authorization':token
      },
      body: this.state.post,
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result=>", result);
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>JWT Token with</h1>
        {!this.state.login ? (
          <div>
            <input
              type="email"
              onChange={(text) => {
                this.setState({ email: text.target.value });
              }}
              placeholder = "Enter Email"
            />{" "}
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(text) => {
                this.setState({ password: text.target.value });
              }}
            />{" "}
            <br />
            <br />
            <button onClick={() => this.login()}>Log In</button>
          </div>
        ) : (
          <div>
            <br />
            <textarea cols="30" rows="3" placeholder="Feedback" onChange={(t)=>{this.setState({post:t.target.value})}}></textarea>
            <br />
            <button onClick={()=>{this.post()}}>Post Data</button>
          </div>
        )}
      </div>
    );
  }
}
export default App;

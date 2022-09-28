import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2").then((resp) => {
      resp.json().then((result) => {
        // console.log("result=>", result.data);
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    // const {users} = this.state
    return (
      <div className="App">
        <h2>Fatch API Data</h2>
        {this.state.users
          ? this.state.users.map((v, i) => {
              return (
                <div>
                  
                    <p key={i}>{i} Name: {v.first_name} {v.last_name} Email: {v.email} </p>
                  
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
export default App;

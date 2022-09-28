import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "Anil", phone: "0300", email: "anil@test.com" },
        { name: "Areeb", phone: "0343", email: "areeb@test.com" },
        { name: "Ghous", phone: "0321", email: "ghous@test.com" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Listing with Map</h1>
        {this.state.list.map((v, i) => {
          return (
            <div>
              <li key={i}>Name: {v.name} <span>Email: {v.email}</span> <span>Phone: {v.phone}</span></li>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;

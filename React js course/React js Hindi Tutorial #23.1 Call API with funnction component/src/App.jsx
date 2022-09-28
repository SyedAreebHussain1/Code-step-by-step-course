import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2").then((resp) => {
      resp.json().then((result) => {
        // console.log("result=>", result.data);
        setUser(result.data);
      });
    });
  }, []);
  return (
    <div className="App">
      <h2>Fatch API Data</h2>
      {users
        ? users.map((v, i) => {
            return (
              <div>
                <p key={i}>
                  {i} Name: {v.first_name} {v.last_name} Email: {v.email}{" "}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
}
export default App;

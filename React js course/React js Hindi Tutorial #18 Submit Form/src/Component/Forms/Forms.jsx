import React from "react";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null,
    };
  }
  render() {
    const submit = () => {
        console.log(this.state)
    };

    return (
      <div>
        <h1>Forms Handling</h1>
        <h1>
          {this.state.user},{this.state.password}
        </h1>
        <input
        //   value={value}
          type="text"
          name="user"
          placeholder="Enter Email"
          onChange={(text) => this.setState({ user: text.target.value })}
        />
        <br />
        <br />
        <input
        //   value={value}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(text) => this.setState({ password: text.target.value })}
        />
        <br />
        <br />
        <button onClick={() => submit()}>Submit</button>
      </div>
    );
  }
}
export default Forms;

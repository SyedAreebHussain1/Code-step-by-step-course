import "./App.css";
import React, { Component} from "react";
class App extends Component {
  upload(f){
    // console.log(f.target.files)
    const files = f.target.files
    const formData = new FormData(); //FormData ka obj bun gaya ha
    
    formData.append('img',files[0])
    fetch('API',{
      method:'POST',
      body:formData
    }).then((resp)=>{
      resp.json().then((result) => {
        console.log('RESULT=>',result)
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Upload File in React Js</h1>
        <input type="file" name="img" onChange={(f) => this.upload(f)} />
      </div>
    );
  }
}
export default App;

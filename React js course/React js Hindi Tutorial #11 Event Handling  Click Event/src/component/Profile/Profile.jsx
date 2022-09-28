import React, { Component } from "react";
import "./style.css";

// // class component ma onclick use karny ka tareeka  // //
// Class component ka ek object ka this hota ha function ka this nh hota
//  class Profile extends Component {
//    testFun(){
//      alert('testFun')
//    }
//   render() {
//     return <div className="profile-component">
//       <h1 className="profile">Profile</h1>
//       {/* onclick={()=>this.testFun()} k upr arrow function humny Q lagaya ha Q k agr apko bind ka concept yaad ho tou hum scope batany k liye hum arrow function define kardyty ha arrow function kya karty ha khud ka apna this hota ha nh wo apna jo parent class hoti haina khud ki uska this utha ta ha     */}
//       <button onClick={()=>this.testFun()}>Click me</button>

//       {/* bind mehtod */}
//       <button onClick={this.testFun.bind(this)}>Click me</button>
//       </div>;
//   }
// }

function Profile() {
  const testFun = () => {
    alert('testFun')
  }
  return (
    <div>
      <h1>Profile</h1>
      {/* Function component ka apna this hota see nh ha  */}
      <button onClick={testFun}>Click me</button>
    </div>
  );
}
export default Profile;

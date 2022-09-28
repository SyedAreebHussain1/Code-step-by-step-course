import React, { Component } from "react";
import "./style.css";
import { useEffect, useState } from "react";

// Class #5
// class Profile extends Component {
//   constructor() {
//     super();
//     console.log("constructor");
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   render() {
//     console.log("render");
//     return (
//       <div className="profile-component">
//         <h2 className="profile">Profile Component</h2>
//       </div>
//     );
//   }
// }

// Class #6
function Profile() {
  const [lorem, setLorem] = useState("Lorem Ipsum is and typesetting industry");
  const [isLess, setIsLess] = useState(true);

  //   useEffect(() => {
  //     console.log("componentDidMount");
  //   }, []);
  const less = () => {
    setLorem("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has");
    setIsLess(true);
  };
  const seemore = () => {
    setLorem(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    );
    setIsLess(false);
  };
  return (
    <div className="profile-component">
      <div>
        {isLess ? (
          <p>
            {lorem}
            <a className="see" onClick={() => seemore()}>see more</a>
          </p>
        ) : (
          <p>
            {lorem}
            <span className="see" onClick={() => less()}>less</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Profile;

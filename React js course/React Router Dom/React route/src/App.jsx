import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home/Home";
import Profile from "./component/Profile/Profile";
import AppRouter from "./Config/Route";
import Navbar from "./Navbar/Nav";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;

import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MenuBar from "./components/navbar/MenuBar";
import Home from "./pages/home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
}

export default App;

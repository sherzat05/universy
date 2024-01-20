import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Reg from "./Components/Reg";
import Login from "./Components/Login";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="reg" element={<Reg />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;

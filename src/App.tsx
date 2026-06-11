import "./App.css";
import HomePage from "./rooms/HomePage";
import ServerRoom from "./rooms/ServerRoom";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/server-room" element={<ServerRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;

import "./App.css";
import ArchivesRoom from "./rooms/ArchivesRoom";
import ExitnodeRoom from "./rooms/ExitnodeRoom";
import "./rooms/HomePage";
import HomePage from "./rooms/HomePage";
import ReactorRoom from "./rooms/ReactorRoom";
import SecurityRoom from "./rooms/SecurityRoom";
import ServerRoom from "./rooms/ServerRoom";
import VaultRoom from "./rooms/VaultRoom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return <div> <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ServerRoom" element={<ServerRoom />} />
            <Route path="/securityRoom" element={<SecurityRoom />} />
            <Route path="/ArchivesRoom" element={<ArchivesRoom />} />
            <Route path="/ReactorRoom" element={<ReactorRoom />} />
            <Route path="/VaultRoom" element={<VaultRoom />} />
            <Route path="/ExitNodeRoom" element={<ExitnodeRoom />} />
          </Routes>
      </BrowserRouter>
  </div>;
};

export default App;

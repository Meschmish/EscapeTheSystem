import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/context';
import { RoomPage } from './rooms/RoomPage';
import { HomePage } from './rooms/HomePage';
import { VictoryPage } from './rooms/VictoryPage';
import { Inventory } from './components/Inventory';

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomPath" element={<RoomPage />} />
          <Route path="/victory" element={<VictoryPage />} />
        </Routes>
        <Inventory />
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;

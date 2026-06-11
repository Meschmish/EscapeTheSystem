import { useLocation, useNavigate } from 'react-router-dom';
import { useGame } from '../context/context';
import roomsData from '../data/rooms.json';

export const Inventory = () => {
  const { inventory, useItem } = useGame();
  const location = useLocation();
  const navigate = useNavigate();

const currentPath = location.pathname.split('/room/')[1];
const currentRoom = roomsData.find((r) => r.roomPath === currentPath);

if (location.pathname === '/') {
  return null; 
}

  const handleInventoryClick = (itemId: number) => {
    if (!currentRoom) {
      alert('You are not in a room right now. Click on a room to start.');
      return;
    }

    if (String(itemId) === String(currentRoom.itemToSolve)) {
      if (currentRoom.itemToAdd === null) {
        navigate(`/room/${currentRoom.roomPath}?escaped=true`);
        return;
      }

      useItem(
        String(currentRoom.itemToSolve), 
        currentRoom.itemToAdd !== null ? String(currentRoom.itemToAdd) : null
      );
    } else {
      alert('Wrong item! Nothing happens. Try something else...');
    }
  };

  return (
    <div>
      <h3>Inventory:</h3>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '15px' }}>
        {inventory.map((item) => (
          <li key={item.id}>
            <button 
              onClick={() => handleInventoryClick(item.id)}
              title={`${item.item} - ${item.description}`}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img src={item.image} alt={item.item} width="60" height="60" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
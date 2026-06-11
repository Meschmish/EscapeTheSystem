import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useGame } from '../context/context';
import roomsData from '../data/rooms.json';

export const RoomPage = () => {
  const { roomPath } = useParams<{ roomPath: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { inventory } = useGame();

  const currentRoom = roomsData.find((r) => r.roomPath === roomPath);

  if (!currentRoom) {
    return (
      <div>
        <p>Room not found.</p>
        <button onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  const isSolved = currentRoom.itemToAdd !== null
    ? inventory.some((i) => String(i.id) === String(currentRoom.itemToAdd))
    : inventory.some((i) => String(i.id) === String(currentRoom.itemToSolve)) && searchParams.get('escaped') === 'true';

  const showHint = searchParams.get('hint') === 'true';

  return (
    <div>
      <h2>{currentRoom.roomName}</h2>

      {!isSolved ? (
        <div>
          <img src={currentRoom.unsolvedImage} style={{ maxWidth: '100%', height: 'auto' }} />
          <p>{currentRoom.unsolvedInstruction}</p>
        </div>
      ) : (
        <div>
          <img src={currentRoom.solvedImage} style={{ maxWidth: '100%', height: 'auto' }} />
          <p>{currentRoom.solvedInstruction}</p>
          
          {currentRoom.itemToAdd === null && (
            <button onClick={() => navigate('/victory')}>Leave Facility</button>
          )}
        </div>
      )}

      <hr />
      <button onClick={() => setSearchParams((prev) => {
        prev.set('hint', showHint ? 'false' : 'true');
        return prev;
      })}>
        {showHint ? 'Hide Hint' : 'Show Hint'}
      </button>
      {showHint && <p><em>Hint: {currentRoom.hint}</em></p>}
    </div>
  );
};
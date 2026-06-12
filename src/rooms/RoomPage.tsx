import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom';
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
  const currentRoomIndex = roomsData.findIndex((r) => r.roomPath === roomPath); 
  const nextRoom = roomsData[currentRoomIndex + 1];
 
  return (
    <div>
      <h2>{currentRoom.roomName}</h2>

      {!isSolved ? ( 
        <div className="flex flex-col items-center space-y-4">
          <img src={currentRoom.unsolvedImage} className="max-w-full h-auto" />
          <p className="max-w-full text-natural-300">{currentRoom.unsolvedInstruction}</p>
        </div>
      ) : (

        <div className="flex flex-col items-center space-y-4">
          <img src={currentRoom.solvedImage} className="max-w-full h-auto" alt="solved"/>
          <p>{currentRoom.solvedInstruction}</p>
          
          {currentRoom.itemToAdd === null && ( 
            <button onClick={() => navigate('/victory')}>Leave Facility</button>
         )}
         {nextRoom && ( //visar nästa rum om de förgående är löst
          <div className="mt-5 ">
            <h3>Next Room - {nextRoom.roomName}</h3>
            <Link to={`/room/${nextRoom.roomPath}`}>
             <img src={nextRoom.unsolvedImage} alt={nextRoom.roomName} className="max-w-full h-auto"
            />      
            <button>Go to {nextRoom.roomName}</button>
        </Link>
      </div>
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
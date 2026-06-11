import { Link } from 'react-router-dom';

export const VictoryPage = () => {
  return (
    <div>
      <h1></h1>
      <p>You escaped...</p> // lägg till vad som står när man vinner
      <Link to="/">Play Again</Link>
    </div>
  );
};
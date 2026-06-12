import { Link } from 'react-router-dom';
import victory from '../Nexus/victory.png';

export const VictoryPage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 flex flex-col justify-center items-center text-white">
      <div
        style={{ backgroundImage: `url(${victory})`, backgroundSize: 'contain' }}
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen p-6 md:p-12 lg:p-24 flex flex-col justify-center items-start text-white relative"
      >
        <div className="w-full max-w-4xl space-y-4 md:space-y-6 mb-8 mt-12 md:mt-0">
          <h1 className="text-3xl md:text-7xl font-bold tracking-tighter text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.9)] uppercase">Congratulations!</h1>
          <h2 className="text-xl md:text-2xl font-semibold">You escaped the facility!</h2>
          <p className="text-s md:text-l leading-relaxed">
            Against all odds, you managed to bypass Project NEXUS's security systems, 
            and override <br/>
            the security lockdown. The heavy steel vault 
            doors have opened, and you made it out alive!</p>
          <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Play Again
          </Link>
        </div>
      </div>
    </div>
  );
};



// EMELIE !!!!! inventory är kvar längst ner på victory sidan, det måste vi lösa. sen har jag bara lagt in en bild på denna sidan. 
// kanske går att fixa snyggare. men jag hade inte fler gratis bilder att använda HAHA
// Sen trycker man på play again och kommer till start sidan och trycker server room så är inventariet kvar, det måste vi också lösa haha. 

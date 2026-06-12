import { Link } from "react-router-dom";
import Nexus from "../Nexus/NEXUS.png";


export const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 flex flex-col justify-center items-center">
  
  <div 
    style={{ backgroundImage: `url(${Nexus})`, backgroundSize: "cover" }}
    className="bg-cover bg-center bg-no-repeat w-full min-h-screen p-6 md:p-12 lg:p-24 flex flex-col justify-center items-start text-white relative"
  >
    <div className="w-full max-w-4xl space-y-4 md:space-y-6 mb-8 mt-12 md:mt-0">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl italic tracking-tighter text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.9)] uppercase">
        Welcome to Escape The System
      </h1>
      
      <h2 className="text-xl md:text-3xl lg:text-4xl tracking-widest font-mono uppercase bg-linear-to-r from-green-200 to-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.70)] animate-pulse bg-clip-text text-transparent">
        Project Nexus awaits
      </h2>    
    </div>

    <div className="w-full max-w-3xl space-y-6 md:space-y-8 font-mono">
      <p className="text-olive-400 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl">
        You are trapped deep inside Project NEXUS – a top-secret, 
        now abandoned artificial intelligence research facility.
        The systems have locked down, the alarms are flashing red, 
        and all exits are electronically sealed. Your only chance of 
        survival is to outsmart the facility’s remaining security systems, 
        room by room.
      </p>

      <div className="space-y-3 bg-black/10 backdrop-blur-md w-62.5">
        <p className="text-olive-400 font-bold text-lg md:text-2xl">
          Go to the rooms:
        </p>
        <ul className=" gap-3 max-w-xl text-base md:text-xl">
          <li><Link to="/room/server-room" className="text-olive-500 hover:text-green-300 transition drop-shadow-md">Server Room</Link></li>
          <li><Link to="/room/security-room" className="text-olive-500 hover:text-green-300 transition drop-shadow-md">Security Room</Link></li>
          <li><Link to="/room/archives-room" className="text-olive-500 hover:text-green-300 transition drop-shadow-md">Archives</Link></li>
          <li><Link to="/room/reactor-room" className="text-olive-500 hover:text-green-300 transition drop-shadow-md">Reactor Room</Link></li>
          <li><Link to="/room/vault-room" className="text-olive-500 hover:text-green-300 transition drop-shadow-md">Vault</Link></li>
          <li><Link to="/room/exit-node" className="text-olive-500 hover:text-green-300 transition drop-shadow-md">Exit Node</Link></li>
        </ul>
      </div>

      <p className="text-green-500  text-base md:text-2xl font-bold tracking-wide drop-shadow-[0_0_8px_rgba(34,197,94,0.80)] animate-pulse">
        The clock is ticking. Good luck!
      </p>
    </div>

  </div>
</div>

  )
}

export default HomePage
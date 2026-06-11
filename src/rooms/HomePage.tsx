import { Link } from "react-router-dom";
import Nexus from "../Nexus/NEXUS.png";

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${Nexus})`, backgroundSize: "cover" }}
      className="bg-cover bg-center bg-no-repeat min-h-screen p-4 md:p-8 flex items-center justify-center bg-neutral-950">
        <header className="text-center space-y-4 w-full"></header>
        <h1 className="absolute top-8 left-15 transform font-bold text-sm md:text-7xl italic tracking-tighter text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.9)]">Welcome to Escape The System</h1>
        
        <h2 className="absolute top-35 left-80  text-4xl tracking-widest font-mono uppercase bg-linear-to-r from-green-200 drop-shadow-[0_0_8px_rgba(34,197,94,0.70)] animate-pulse bg-clip-text" >Project Nexus awaits</h2>    
        <div>
            <p className="text-olive-400 absolute top-70 left-40 text-2xl">
                You are trapped deep inside Project NEXUS – a top-secret, <br />
                now abandoned artificial intelligence research facility.<br />
                The systems have locked down, the alarms are flashing red,<br /> 
                and all exits are electronically sealed. Your only chance of<br />
                survival is to outsmart the facility’s remaining security systems,
                room by room.</p>

                <p className="text-olive-400 absolute top-120 left-40 text-2xl"
                >The rooms.</p>
                <ul className=" absolute top-130 left-40 text-xl">
                <li className="text-olive-500 text-shadow-lg/400">
		            1.Server Room <br />
		            2.Security Room <br />
		            3.Archives <br />
		            4.Reactor Room <br />
		            5.Vault <br />
		            6.Exit Node </li>
              </ul>
              <p className="text-olive-400 absolute top-180 left-40 text-shadow-lg/800 animate-pulse">
     		        The clock is ticking. Good luck! </p>

              <Link to="server-room" className="absolute top-240 left-387 ">
              <button type="button" className="bg-olive-400 hover:bg-olive-700 text-grey-100 font-bold py-5 px-9 ">Let's go!
              </button>
              </Link>
              
          </div>
    
  </div>
  )
}

export default HomePage
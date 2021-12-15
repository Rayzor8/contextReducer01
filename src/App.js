import PlayerContextProvider from './contexts/PlayerContext';
import Navbar from './components/Navbar';
import PlayerDetails from './components/PlayerDetails';

function App() {
   return (
      <div className="App font-mono bg-slate-200 w-full min-h-screen">
         <PlayerContextProvider>
            <Navbar />
            <PlayerDetails/>
         </PlayerContextProvider>
      </div>
   );
}

export default App;

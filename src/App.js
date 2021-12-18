import Loader from './components/Loader';
import PlayerContextProvider from './contexts/PlayerContext';
import React, { lazy, Suspense} from 'react';
import PlayerInputForm from './components/PlayerInputForm';

const NavbarComponent = lazy(() => import('./components/Navbar'));
const PlayerList= lazy(() => import('./components/PlayerList'));

function App() {
   return (
      <Suspense fallback={Loader()}>
         <div className="App font-mono bg-slate-200 w-full min-h-screen pb-10">
            <PlayerContextProvider>
               <NavbarComponent />
               <PlayerList />
               <PlayerInputForm/>
            </PlayerContextProvider>
         </div>
      </Suspense>
   );
}

export default App;

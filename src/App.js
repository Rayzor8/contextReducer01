import Loader from './components/Loader';
import PlayerContextProvider from './contexts/PlayerContext';
import React, { lazy, Suspense} from 'react';

const NavbarComponent = lazy(() => import('./components/Navbar'));
const PlayerList= lazy(() => import('./components/PlayerList'));

function App() {
   return (
      <Suspense fallback={Loader()}>
         <div className="App font-mono bg-slate-200 w-full min-h-screen">
            <PlayerContextProvider>
               <NavbarComponent />
               <PlayerList />
            </PlayerContextProvider>
         </div>
      </Suspense>
   );
}

export default App;

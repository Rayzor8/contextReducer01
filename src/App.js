import Loader from './components/Loader';
import PlayerContextProvider from './contexts/PlayerContext';
import React, { lazy, Suspense, useEffect } from 'react';

const NavbarComponent = lazy(() => import('./components/Navbar'));
const PlayerDetails = lazy(() => import('./components/PlayerDetails'));

function App() {
   return (
      <Suspense fallback={Loader()}>
         <div className="App font-mono bg-slate-200 w-full min-h-screen">
            <PlayerContextProvider>
               <NavbarComponent />
               <PlayerDetails />
            </PlayerContextProvider>
         </div>
      </Suspense>
   );
}

export default App;

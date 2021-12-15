import React from 'react';
import './LoaderStyle.css'

const Loader = () => {
   return (
      <div className="flex min-h-screen w-full justify-center items-center bg-blue-400">
         <div className="loader bg-pink-600 rounded-full p-5 flex space-x-3">
            <div className="w-5 h-5 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-yellow-400 rounded-full animate-bounce"></div>
         </div>
      </div>
   );
};

export default Loader;

import React from 'react';
import Button from '../Button';

const DeleteModals = ({ el, setShowModal }) => {
   return (
      <div className="absolute inset-0">
         <div className="bg-slate-800 h-full mx-auto text-white rounded-lg px-6 py-20 flex justify-center flex-col items-center gap-6">
            <h1>Are You sure to delete this Player Data?</h1>
            <div className="space-x-4">
               <Button
                  bg={'bg-pink-600'}
                  text={'Delete'}
                  el={el}
                  setShowModal={setShowModal}
               />
               <Button
                  bg={'bg-green-600'}
                  text={'Cancel'}
                  el={el}
                  setShowModal={setShowModal}
               />
            </div>
         </div>
      </div>
   );
};

export default DeleteModals;

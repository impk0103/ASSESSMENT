import React from 'react';
import Dp1 from '../assets/Dp1.png';

const Chats = ({ onUserChatClick }) => {
  return (
    <div className='chats w-full max-sm:hidden'>
      <div className='userChat w-full p-3 flex gap-3 items-center text-white cursor-pointer hover:bg-[#570b22]' onClick={onUserChatClick}>
        <img loading='lazy' className='w-12 h-12 rounded-3xl object-cover' src={Dp1} alt='dp'></img>
        <div className="userChatInfo flex flex-col w-full items-center justify-center">
          <span className='w-full text-xl font-semibold'>Emily</span>
          <p className='w-full text-sm font-thin text-white'>**Last Message** Click here</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;

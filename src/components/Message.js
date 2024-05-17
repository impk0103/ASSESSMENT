import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.png';
import Sound from '../assets/Sound.svg';
import Like from '../assets/Like.svg';
import Dislike from '../assets/Dislike.svg';
import Edit from '../assets/Edit.svg';
import Copy from '../assets/Copy.svg';

const Message = ({ type, text }) => {
  return (
    <>
      {type === 'sent' ? (
        <div className='gotMsg text-white relative w-full pr-5'>
          <div className='flex items-center gap-2 mb-4 w-full flex-row-reverse'>
            <span className='text-white text-opacity-30 text-xs'>Emily</span>
            <img src={ProfilePhoto} alt='img' className='h-10 w-10 object-cover rounded-3xl' />
          </div>
          <div className='w-full flex flex-row-reverse'>
            <span className='rounded-lg bg-gray-700 text-sm text-center p-2'>{text}</span>
          </div>
          <div className='flex flex-row-reverse p-2 gap-3 mt-2 w-full'>
            <button><img src={Copy} alt='img' className='h-3 w-3 opacity-10' /></button>
            <button><img src={Edit} alt='img' className='h-3 w-3 opacity-10' /></button>
          </div>
        </div>
      ) : (

        <div className='sentMsg text-white pl-5'>
          <div className='flex items-center gap-2 mb-4'>
            <img src={ProfilePhoto} alt='img' className='h-10 w-10 object-cover rounded-3xl' />
            <span className='text-white text-opacity-30 text-xs'>Emily</span>
          </div>
          <span className='rounded-lg ml-6 bg-[#d62a5e] text-sm text-center p-2'>{text}</span>
          <div className='flex ml-6 items-center w-[200px] justify-center p-2 gap-3 mt-2'>
            <button><img src={Sound} alt='img' className='h-3 w-3 opacity-10' /></button>
            <button><img src={Like} alt='img' className='h-3 w-3 opacity-10' /></button>
            <button><img src={Dislike} alt='img' className='h-3 w-3 opacity-10' /></button>
            <button><img src={Edit} alt='img' className='h-3 w-3 opacity-10' /></button>
            <button><img src={Copy} alt='img' className='h-3 w-3 opacity-10' /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;

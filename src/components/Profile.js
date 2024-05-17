import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.png';
import Share from '../assets/Share.svg';
import Back from '../assets/Back.svg';
import Menu from '../assets/Menu.svg';
import Setting from '../assets/Setting.svg';
import More from '../assets/More.svg';
import Edit from '../assets/Edit.svg';
import Close from '../assets/Close.svg';
import Camera from '../assets/Camera.svg';
import Chat from '../assets/Chat.svg';
import Lock from '../assets/Lock.svg';
import ShareN from '../assets/ShareN.svg';

const Profile = ({ onClose }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-[#252525] w-full flex items-center place-content-between'>
        <div className='flex gap-1 ml-1 items-center text-white text-sm justify-center'>
          <button className='backbtn' onClick={onClose}>
            <img loading='lazy' src={Back} alt='img' className='h-5 w-5'></img>
          </button>
          <p>Chats img: <span className='text-opacity-50 text-white'>4</span> msg: <span className='text-opacity-50 text-white'>1</span></p>
        </div>
        <div className='flex gap-3 mr-4 items-center justify-center'>
          <button><img  loading='lazy' src={Menu} alt='img' className='h-4 w-4'></img></button>
          <button><img  loading='lazy'src={Setting} alt='img' className='h-4 w-4'></img></button>
          <button><img  loading='lazy' src={More} alt='img' className='h-4 w-4'></img></button>
          <button><img  loading='lazy'  src={Edit} alt='img' className='h-4 w-4'></img></button>
          <button onClick={onClose}><img loading='lazy' src={Close} alt='img' className='h-4 w-4'></img></button>
        </div>
      </div>
      <div className="w-full relative">
        <img src={ProfilePhoto} className='w-full' alt='img' loading='lazy' ></img>
        <div className='absolute bottom-0 w-full shadow-[inset_0px_-30px_30px_0px_#1C1C1C] bg-opacity-45 flex flex-col justify-center'>
          <p className='text-white pl-8 font-semibold text-lg'>Emily Nyguyen</p>
          <div className='flex gap-x-80 pl-8 text-sm items-center w-full '>
            <span className='text-white mb-2'>@Emily</span>
            <button><img src={Share} alt='img' loading='lazy' className='w-4 h-4 mb-2 ml-4'></img></button>
          </div>
        </div>
      </div>
      <div className='w-11/12 mt-4 h-10 rounded-md bg-[#252525] flex items-center gap-x-56 p-3 text-white'>
        <div className='flex items-center gap-2 text-sm pl-2'>
          <img src={Camera} alt='img' loading='lazy' className='h-3 w-3'></img>
          <span>3</span>
          <img src={Chat} alt='img' loading='lazy' className='h-3 w-3'></img>
          <span>67</span>
        </div>
        <div className='text-sm flex items-center gap-2'>
          <img src={Lock} alt='img' loading='lazy' className='h-3 w-3'></img>
          <p className=''>Public Profile</p>
          <img src={ShareN} alt='img' loading='lazy' className='h-3 w-3'></img>
        </div>
      </div>
      <div className='w-11/12 mt-4 h-52 rounded-md bg-[#252525] flex items-center place-content-between text-white text-xs'>
        <div className='w-1/2 flex flex-col gap-1 justify-center pl-4'>
          <p className='font-semibold text-sm'>Who I am</p>
          <div className=''>
            <p className='font-semibold text-sm'>Personality</p>
            <p>Submissive</p>
          </div>
          <div>
            <p className='font-semibold text-sm'>Work</p>
            <p>Student</p>
          </div>
          <div>
            <p className='font-semibold text-sm'>Hobbies</p>
            <p>Dance</p>
          </div>
          <div>
            <p className='font-semibold text-sm'>Realtionship</p>
            <p>Long-time Crush</p>
          </div>
        </div>
        <div className='w-1/2 h-full flex flex-col item-center gap-4 p-2'>
          <div className='flex items-center gap-24 pt-2'>
            <p className='font-semibold text-sm'>About Me</p>
            <button><img src={Edit} loading='lazy' className='h-4 w-4' alt='img'></img></button>
          </div>
          <p className='tracking-wider'>Just a girl trying to find beauty in the chaos. 🌊Life coach by day,wild hiker by heart. Let's wander where the Wifi is weak.👠💪 #LifeIsAnAdventure <br /> #BlondeBlack</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;

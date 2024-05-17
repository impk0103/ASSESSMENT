import React from 'react'
import Logo from '../assets/Logo.png'
import Chat from  '../assets/Chat.svg';
import Peoples from '../assets/Peoples.svg'
import Camera from '../assets/Camera.svg'
import Chat1 from  '../assets/Chat1.svg';
import Peoples1 from '../assets/Peoples1.svg'
import Camera1 from '../assets/Camera1.svg'
import Character from '../assets/Character.svg'
import Profile from '../assets/Profile.svg'
import Dropdown from '../assets/Dropdown.svg'
import { useState } from 'react';
import Menu1 from '../assets/Menu1.svg'
 const NavBar = () => {

  const [activeButton, setActiveButton] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'images') {
      document.getElementById('imageInput').click();
    }
  };

  const handleImageChange = (event) => {
   const file = event.target.files[0];
   setSelectedImage(URL.createObjectURL(file));
 };
   
  return (
    <div className='w-full h-16  bg-[#252525] flex items-center  place-content-between  '>
       <img src={Logo} alt='Logo' className='h-8 w-40 m-3'></img>
       <div className='options flex items-center gap-4 max-sm:hidden'>

          <div className='relative'>
          <button  onClick={() => handleButtonClick('chat')} className={`${activeButton === 'chat' ? 'text-[#d62a5e]' : 'text-white'} flex gap-2  p-2 items-center justify-center`}>
          <img loading='lazy' src={activeButton === 'chat' ? Chat1 : Chat } alt='icon' className='h-4 w-4 mt-1 text-white'></img>Chat</button>
            <div className={`${activeButton === 'chat' ? 'visible' : 'hidden'} h-0.5 w-full bg-[#d62a5e] absolute top-12`}></div>
          </div>

          <div className='relative'>
            <button onClick={() => handleButtonClick('characters')} className={`${activeButton === 'characters' ? 'text-[#d62a5e]' : 'text-white'} flex gap-2  p-2 items-center justify-center`}>
            <img loading='lazy' src={activeButton === 'characters' ? Peoples1 : Peoples} alt='icon' className='h-4 w-4 mt-1 text-white'></img>My Characters</button>
            <div className={`${activeButton === 'characters' ? 'visible' : 'hidden'} h-0.5 w-full bg-[#d62a5e] absolute top-12`}></div>
          </div>

          <div className='relative'>
            <button  onClick={() => handleButtonClick('images')} className={`${activeButton === 'images' ? 'text-[#d62a5e]' : 'text-white'} flex gap-2  p-2 items-center justify-center`}>
            <img loading='lazy' src={activeButton === 'images' ? Camera1 : Camera} alt='icon' className='h-4 w-4 mt-1 text-white'></img>Generate Images</button>
            <input id='imageInput' type='file' accept='image/*' style={{ display: 'none' }} onChange={handleImageChange}></input>
            <div className={`${activeButton === 'images' ? 'visible' : 'hidden'} h-0.5 w-full bg-[#d62a5e] absolute top-12`}></div>
          </div>

          <div className='relative'> 
            <button className='flex text-white gap-2  p-2 items-center justify-center bg-[#d62a5e] rounded-lg h-8'><img src={Character} alt='icon' className='h-4 w-4 mt-1 text-white'></img>Create Character</button>
          </div>
          
       </div>
       <button className='flex text-white gap-2  mr-2 p-2 items-center justify-center  max-sm:hidden'><img src={Profile} alt='icon' className='h-4 w-4 mt-1 text-white'></img>My Profile<img src={Dropdown} alt='icon' className='h-3 w-3 mt-1 text-white'></img></button>
        <button><img src={Menu1} alt='icon' className='h-5 w-5 mr-3 sm:hidden'></img></button>
    </div>
  )
}

export default NavBar;

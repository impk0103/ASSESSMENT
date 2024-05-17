import React from 'react'
import Search from './Search'
import Chats from './Chats'
import Profile from '../components/Profile'
import { useState } from 'react'

const SideBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  // return (
  //   <div className='w-1/3 h-full bg-[#62162d]'>
  //   <Search></Search>
  //   <Chats></Chats>
  //   </div>
  // )

  return (
    <div className='w-1/3 h-full bg-[#62162d] max-sm:hidden'>
      {showProfile ? (
        <Profile onClose={() => setShowProfile(false)} />
      ) : (
        <>
          <Search />
          <Chats onUserChatClick={() => setShowProfile(true)} />
        </>
      )}
    </div>
  )
}

export default SideBar;

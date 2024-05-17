import React from 'react'
import SearchIcon from '../assets/SearchIcon.svg'

 const Search = () => {
  return (
    <div className='search border-b'>
      <div className="searchForm p-3 flex gap-3    w-full h-full ">
          <img loading='lazy' src={SearchIcon} alt='search' className='h-8 w-8'></img>
          <input className='bg-transparent border-none w-full h-full text-white outline-none placeholder:text-white' type='text' placeholder='Find a user'></input>
      </div>
      {/* <div className='userChat p-3 flex gap-3 items-center text-white cursor-pointer hover:bg-[#570b22]'>
          <img className='w-12 h-12 rounded-3xl object-cover ' src={Dp1} alt='dp'></img>
          <div className="userChatInfo">
              <span>Emily</span>
          </div>
      </div> */}
    </div>
  )
}

export default Search;

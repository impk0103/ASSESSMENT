 import React from 'react'
 import NavBar from "../components/NavBar";
 import SideBar from "../components/SideBar";
 import Chat from "../components/Chat";
  const Home = () => {
   return (
     <div className='Home w-screen h-screen ' >
       <div className='Container flex flex-col w-full  h-full overflow-hidden'>
             <NavBar></NavBar>
             <div className='main flex w-full h-full '>
                <SideBar></SideBar>
                <Chat></Chat>
             </div>
       </div>
     </div>
   )
 }

 export default Home;
 
import React from "react";
import { Icon } from "../../../atoms/Icon";
import { Profile } from "../../../atoms/Profile";

export const Topbar = (props) => {
  if (props.type === "topbar") {
  return (
    <div className='flex flex-center flex-between mt-5 ml-5 mr-5'>
       <div className='flex left-icon'>
        <Icon type='hamburger' width='15px' className='mtop-5' />
        <Icon type='youtubePath' className='mtop-5' />
       </div>
       <div className='flex mobile-search'>
        <input  className='mobile-input'type="text" placeholder="Search" />
        <button className='flex search mobile-searchicon'>
        <div className="icon-search mobile-icon "><Icon type='search'  /></div>
        </button>
        <button className='flex audio mobile-audio'>
        <div className="audio-icon "><Icon type='audio'  /></div>
        </button>  
       </div>
     <div className=' flex mr-5 mtop-4 right-icons'>
        <Icon type='video' width='15px' className='mr-3 ' />
        <Icon type='bell' width='15px' className='mr-5 '  />
        <div className="flex dark"><Icon type='darkmode' width='15px' className='ml-5 mr-5'  /></div>
        <Profile type='profile'  />
        
    </div> 
    {/* <script src="/index.js"></script> */}
    </div>
    
         );
    }
}
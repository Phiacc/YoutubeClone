import React from 'react'
import { Icon } from '../../atoms/Icon';
import { Profile} from "../../atoms/Profile";
// import { image } from "../../../assests/";

export const Card = (props) => {
  if (props.type === "card") {
    return (
      <a className='ref' href="https://www.youtube.com/@MyNameIsJackieHill/videos">
        <div className='flex flex-column mr-2 mb-2 card '>
        <div className='flex card-top mobilecard-top'>
          <img  className="card-image" src='' alt='' />
          <Icon type='youtube' className=' surface-icon fill-red'  />
        </div>
      
      <div className='flex card-bottom'>
        <div className='logo-left'>
        <Profile type='profile'  />
        </div>
        <div className='logo-right'>
          <h5>HELLO SAINTS</h5>
          <small>Jackie Hill Perry</small> <br />
          <small>33,000,405 views. 2 weeks ago</small>
        </div>
      </div>
      </div>
      </a>
    );
  }
          return <div>Card</div>;
}
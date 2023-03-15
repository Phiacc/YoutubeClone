import React from 'react'
import { IconText } from "../../../Molecules/IconText";

export const Slidebar = (props) => {
if (props.type === "slidebar") {
    return (
    <div className='flex flex-column side-bar mobileside-bar'>
      <div className='flex mt-5'>
      <IconText type='icontext1' />
      </div>
      <div className='flex mt-5'><IconText type='icontext2' /></div>
      <div className='flex mt-5'><IconText type='icontext3' /></div>
      <div className='flex mt-5'><IconText type='icontext4' /></div> 
      <div className='flex mt-5'>
      <IconText type='icontext1' />
      </div>
      <div className='flex mt-5'><IconText type='icontext2' /></div>
      <div className='flex mt-5'><IconText type='icontext3' /></div>
      <div className='flex mt-5'>
      <IconText type='icontext1' />
      </div>
      <div className='flex mt-5'><IconText type='icontext2' /></div>
      <div className='flex mt-5'><IconText type='icontext3' /></div>
      <div className='flex mt-5'>
      <IconText type='icontext1' />
      </div>
      <div className='flex mt-5'><IconText type='icontext2' /></div>
      <div className='flex mt-5'><IconText type='icontext3' /></div>
      <div className='flex mt-5'><IconText type='icontext4' /></div>
       
    </div>
  )
}
}
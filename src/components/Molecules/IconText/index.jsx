import React from 'react'
import { Icon } from "../../atoms/Icon";

export const IconText = (props) => {
 if (props.type === "icontext1") {
  return (
    <div className='flex flex-column' >
      <div className='flex'>
        <Icon type='home' /><small className='side-text'>Home</small>
      </div>
      </div>
      )
     }

    if (props.type === "icontext2") {
  return (
    <div className='flex flex-column' >
      <div className='flex'>
        <Icon type='shortVideo' /><small className='side-text'>Shorts</small>
      </div>
      </div>
    )
  }

 if (props.type === "icontext3") {
    return (
    <div className='flex flex-column' >
      <div className='flex'>
        <Icon type='subscription' /> <small className='side-text'>Subscription</small>
      </div>
      <hr className='line'/>
      </div>
      )
    }

    if (props.type === "icontext4") {
        return (
        <div className='flex flex-column' >
          <div className='flex'>
            <Icon type='library' /><small className='side-text'>Library</small>
          </div>
         
          </div>
          )
        }
        

}

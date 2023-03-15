import React from 'react'

export const Profile= (props) => {
    if (props.type === "profile") {
      return (
        <div  className='profile'
          style={{
            width: "25px",
            height: "25px",
            borderRadius: "20px",
            border: "1px solid black",   
          }}
        ></div>
      );
    }
}
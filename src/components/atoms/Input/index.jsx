import React from 'react'

export const Input = ({ type, placeholder, labelTxt, name,}) => {
    return (
            <>
              <Input type="search" placeholder={placeholder} 
              style={{marginBottom:"10px", padding:"4px 10px"}} />     
            </>
    )
}
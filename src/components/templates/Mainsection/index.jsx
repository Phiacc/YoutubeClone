import React from "react";
import { Card } from "../../organisms/Card";
import { Button } from "../../atoms/Button";

export const Mainsection = (props) => {
  if (props.type === "mainsection") {
    return (
      <div className="flex flex-column">
        <div className='flex ml-10 mb-7'>
        <Button type='button' />
          </div>
        <div className='flex ml-10  flex-wrap right-section' >
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
             <Card type='card' />
           </div>
      </div>
    );
  }
  
};

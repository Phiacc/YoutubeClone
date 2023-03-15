import React from 'react'

import { Slidebar } from '../../organisms/Navbar/Sidebar/Index';
import { Topbar } from "../../organisms/Navbar/Topbar";
import { Mainsection } from "../../templates/Mainsection";

export const HomePage = () => {
    return (
        <div>
            <Topbar type='topbar' />
        <div className='mt-5 flex  '>
           <div className='ml-5 flex  '><Slidebar  type='slidebar' /></div>
           <Mainsection type='mainsection' />
        </div>
        </div>
        
    );
};
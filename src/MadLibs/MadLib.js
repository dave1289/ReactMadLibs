import React, { useState } from 'react';
import MadLibsForm from './MadLibsForm';
import Story from './Story';

const MadLibs = () => {
   return (
      <div className='MadLibs'>
         <h1 className='display-1'>MadLibs</h1>
         <MadLibsForm />
         <Story />
      </div>
   )
}

export default MadLibs;
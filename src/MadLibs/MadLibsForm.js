import React, { useState } from 'react';
import useFields from '../hooks/useFields';
import './MadLibsForm.css'

const MadLibsForm = () => {
   const [formData, handleChange, resetForm] = useFields({
      noun_1: '',
      noun_2: '',
      adjective: '',
      color: ''
   })

   const handleSubmit = e => {
      e.preventDefault();
      resetForm();
   }
   return (
      <form className='MadLibsForm' onSubmit={handleSubmit}>
         <input
         type='text'
         name='noun_1'
         value={formData.noun_1}
         onChange={handleChange}
         placeholder={'noun'}/>
         <input
         name='noun_2'
         type='text'
         value={formData.noun_2}
         onChange={handleChange}
         placeholder={'noun 2'}/>
         <input
         name='adjective'
         type='text'
         value={formData.adjective}
         onChange={handleChange}
         placeholder={'adjective'}/>
         <input
         name='color'
         type='text'
         value={formData.color}

         onChange={handleChange}
         placeholder={'color'}/>
         <button className='btn btn-secondary'>Get Story</button>
      </form>
   )
}

export default MadLibsForm
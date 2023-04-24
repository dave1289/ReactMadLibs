import React, { useEffect, useState } from 'react';
import useFields from '../hooks/useFields';
import './MadLibsForm.css'
import useToggleState from '../hooks/useToggle';
import Story from './Story';

const MadLibsForm = () => {
   const [formData, handleChange, resetForm] = useFields({
      noun_1: '',
      noun_2: '',
      adjective: '',
      color: ''
   })

   const saveToLocal = () => {
      localStorage.setItem('noun_1', formData.noun_1)
      localStorage.setItem('noun_2', formData.noun_2)
      localStorage.setItem('adjective', formData.adjective)
      localStorage.setItem('color', formData.color)
   }

   const [storyVisible, setStoryVisible] = useToggleState(false)

   const handleSubmit = e => {
      saveToLocal();
      e.preventDefault();
      setStoryVisible();
      resetForm();
   }

   return (
      <>
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
      <span className={storyVisible? 'Visible-Story' : 'Invisible-Story'}>The {localStorage.adjective} {localStorage.noun_1} ran up to the {localStorage.color} {localStorage.noun_2} and say 'Yo'.</span>
      </>
   )
}

export default MadLibsForm
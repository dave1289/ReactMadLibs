import React, { useState } from 'react';

const Story = (words) => {
   const [story, setStory] = useState(null)

   const populateStory = ({ noun1, noun2, adjective, color }) => {
      setStory(`you are a ${adjective} ${noun1} and you can go fuck yourself with a ${color} ${noun2}`)
   }

   return (
      <div>
      </div>
   )
}

export default Story;
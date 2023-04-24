import React, { useState } from 'react';

const Story = ({noun1, noun2, adjective, color}) => {
   const [story, setStory] = useState(null)

   const populateStory = (noun1, noun2, adjective, color) => {
      setStory()
   }

   return (
      <div>
         {story}
      </div>
   )
}

export default Story;
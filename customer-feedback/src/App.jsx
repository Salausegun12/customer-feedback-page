import React from 'react'
import { useState } from 'react';

function App() {
  const [score, setScore] = useState ("10");
  const [comment, setComment] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <=10) {
      alert("Please provide a comment explaining why the experience was poor.")
      return;
    }
    setComment("");
    setScore("10");
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form action="" className='max-w-2xl w-full' onSubmit={handleSubmit}>
        <fieldset className='p-5 border-2 '>
          <h2 className='text-lg font-semibold text-center'>Feedback form</h2>
          <div >
            <label htmlFor="">Score: {score}⭐</label>
            <input type="range" 
            min="0" 
            max="10" 
            value={score} 
            onChange={e => setScore(e.target.value)} 
            className='w-full'/>
          </div>
          <div>
            <label htmlFor="">Comment:</label>
            <div><textarea value={comment} onChange={e => setComment(e.target.value)}
            className='border p-1 h-20 w-full rounded-lg mt-5 focus:ring-blue-100'></textarea></div>
            
          </div>
          <button type='submit' className='text-center w-full border bg-gray-200 rounded-lg mt-5'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
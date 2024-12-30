import React from 'react'

function Quiz() {

  const onPrev = () => {
    console.log("onprev is run")
  }

  const onNext = () => {
    console.log("onnext is run")
  }


  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz

import React from 'react'
import Thumnail from './Thumnail'
import FlipMove from 'react-flip-move';

const Result = ({results}) => {
  return (
    <FlipMove className='mx-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
     {results.map((result)=>(
      <Thumnail key={result.id} result={result} />
     ))}
    </FlipMove>
  )
}

export default Result

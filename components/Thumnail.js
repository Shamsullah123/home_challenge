import React, { forwardRef } from 'react';
import Image from 'next/image'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

const Thumnail = forwardRef(({result}, ref) => {
    const BASE_PATH = 'https://image.tmdb.org/t/p/original/'
  return (
    <div ref={ref} className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image 
        layout='responsive'
        height={1080}
        width={1920}
        src={`${BASE_PATH}${result.backdrop_path || result.poster_path}` || `${BASE_PATH}${result.poster_path}` }
      
      />
      <div className='p-2'>
        <p className='truncate max-w-screen-md'>{result.overview}</p>
        <h2 className='mt-2 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
        <p className='flex opacity-0 group-hover:opacity-100'>{result.media_type && `${result.media_type} +`}{" "} {result.release_date || result.first_air_date} + {" "}
        <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        
        </p>
      </div>
    </div>
  )
})

export default Thumnail

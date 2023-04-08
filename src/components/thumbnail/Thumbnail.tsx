import React from 'react'
import { ThumbnailProps } from './Thumbnail.Props'
import Image from 'next/image'
import { image_base } from 'src/helpers/constants'

function Thumbnail({movie}:ThumbnailProps) {
  return (
    <div className='relative h-[330px] min-w-[200px] cursor-pointer md:h-[440px] transition duration-200 md:hover:scale-110 ease-out md:min-w-[292px]'>
         <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={"movie.title"} fill className='object-cover rounded-sm md:rounded' />
    </div>
  )
}

export default Thumbnail
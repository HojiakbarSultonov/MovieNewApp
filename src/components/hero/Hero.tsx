import React, { useEffect, useState } from 'react'
import { HeroProps } from './Hero.props'
import Image from 'next/image'
import { IMovie } from 'src/interfaces/app.interface'
import { image_base } from 'src/helpers/constants'
import { TbPlayerPlay } from 'react-icons/tb'

function Hero({ trending }: HeroProps): JSX.Element {
    const [movie, setMovie] = useState<IMovie>({} as IMovie)

    useEffect(() => {
        const randomMovie = trending[Math.floor(Math.random() * trending.length)]
        setMovie(randomMovie)
    }, [trending])
    return (
        <div className='flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end'>
            <div className='absolute top-0 left-0 h-[95vh] -z-10 w-full'>
                <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={"movie.title"} fill className='object-cover' />
            </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <p className='max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl text-shadow-md'>{movie?.overview}...</p>
            <div>
                <button className='flex justify-center items-center space-x-2 bg-white/60 text-black w-[200] h-14 rounded-full t'>
                    <TbPlayerPlay className='h-5 w-5 md:h-8 md:w-8' /> Watch now</button>
            </div>
        </div>
    )
}

export default Hero
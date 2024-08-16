import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Reach out right <span className='text-purple'> now</span>!</h1>
            <a href='mailto:laurin.hubschmid@yahoo.com'>
                <MagicButton
                    title='Let&apos; get in touch'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
            <div className='flext mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light' > CopyRight &copy;  2024 Laurin</p>
            </div>
            <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile)=>(
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <a href={profile.link}>
                                <img src={profile.img} width={20} height={20}
                                />
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
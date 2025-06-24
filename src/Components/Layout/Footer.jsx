import { ChevronRight, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import heroImg from "../../../public/hero-bg-BA73wE5O.jpg.png";

const Footer = () => {
  return (
    <div className='relative text-amber-50 overflow-hidden'>
      <Image 
        src={heroImg} 
        alt="Profile" 
        className="object-cover rounded-lg w-full h-fit hidden md:block" 
        height={500} 
        width={500} 
      />

      <div className='absolute top-10 w-full'>
        <div className='text-white font-thin flex flex-col justify-center items-center px-4 text-center'>
          <h2 className='text-4xl md:text-6xl'>Need more clarity?</h2>
          <h2 className='text-4xl md:text-6xl'>Get in touch!</h2>
          <button className='bg-primary p-2 mt-5 text-black px-4 rounded-b-4xl rounded-t-4xl flex justify-center items-center gap-2'>
            Book a demo <ChevronRight size={18} className='text-black' />
          </button>
        </div>

        <div className='text-white/70 w-full mt-20 px-6'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
            <p>© 2024 All Rights Reserved</p>
            <ul className='flex gap-4'>
              <li className='border rounded-full p-2'><Linkedin size={16} /></li>
              <li className='border rounded-full p-2'><Instagram size={16} /></li>
              <li className='border rounded-full p-2'><Youtube size={16} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

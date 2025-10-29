import React from 'react'


const Navbar = () => {
  const links = [
    {
      href:'/',
      title: 'How It Works'
    },
    {
      href:'/',
      title: 'Our Works'
    },
    {
      href:'/',
      title: 'Our Process'
    },
    {
      href:'/',
      title: 'Founder'
    },
     {
      href:'/',
      title: 'Pricing'
    },
  ]
  return (
    <div className='flex items-center justify-between'>
      <a href='/'>
        <img src='./Logo.png' height={180} width={180} />
      </a>
      <div className="flex items-center  gap-4">
        {links.map((link, index)=>{
          return(
            <a href={link.href} key={index} className='text-black text-base font-semibold'>{link.title}</a>
          )
        })}
        <button className='text-white  font-semibold text-base bg-linear-to-t from-[#0F93FF] to-[#003BB9] w-[137px] h-12 rounded-full shadow-sm shadow-[#00D0FF]'>
          Book a Call
        </button>
      </div>
      
    </div>
  )
}

export default Navbar
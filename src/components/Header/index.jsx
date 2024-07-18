import React from 'react'

const Header = () => {
  return (
    <div className='px-[10px] h-[60px] w-full flex justify-between items-center
     bg-orange-300'>
        <img src="./shoeslogo.png" alt="Logo"  className='h-100 w-[120px] mix-blend-multiply' />
        <ul className=' w-[50%] flex flex-row justify-center items-center'>
            <li className='mx-[15px] font-[Gwendolyn] text-3xl text-black-800 font-bold'>Home</li>
            <li className='mx-[15px] font-[Gwendolyn] text-3xl text-black-800 font-bold'>About</li>
            <li  className='mx-[15px] font-[Gwendolyn] text-3xl text-black-800 font-bold'>ContactUs</li>
        </ul>
        <div>
            <h1 className='mx-[5px] font-[Gwendolyn] text-3xl text-black-800 font-bold'>My Profile</h1>
        </div>

        
    </div>
  )
}

export default Header
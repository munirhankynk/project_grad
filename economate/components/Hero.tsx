"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import Button from './Button'
import { log } from 'console';

const Hero = () => {
    function handleClick(){
        console.log("I m a teapot");
        console.log(isClicked);
        setIsClicked(!isClicked);

    }
    const [isClicked, setIsClicked] = useState(false);

  return (   
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:32 md-gap-28 
    lg:py20 xl:flex-row'>
    <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
    <Image 
    src= "/economate-logo.png"
    alt="logo"
    width={50}
    height={50}
    className='absolute left-[-5px] top-[-30px] w-10 lg:w-[-50px]'
    />
    <h1 className='bold-52 lg:bold-58'>EconoMate</h1>
    <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales eget sem pretium finibus. Vestibulum at tellus ac orci porta lobortis. Sed sagittis placerat ligula, et aliquam mi aliquet ac. Quisque ut augue hendrerit augue ultricies varius. Fusce sollicitudin ut massa nec blandit. Ut sagittis dolor sed justo iaculis tincidunt.
     Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ullamcorper eleifend mauris nec eleifend.
    </p>
    <div className='my-11 flex flex-wrap gap-5'>
        <div className='flex items-center gap-2'>
        {Array(5).fill(1).map((_,index)=> (
        <Image 
        src= "/star.svg"
        key= {index}
        alt='star'
        width={24}
        height={24}
        />    
        ))}
        </div>
            <p className='bold-16 lg:bold-20 text-blue-70'>
                198k
                <span className='regular-16 lg:regular-20 ml-1 
                underline '>Excellent Reviews</span>
            </p>

        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
            <Button 
            type='button' 
            title='Download App'
            variant='btn_green'
            />
            <Button 
            type='button' 
            title='How we work?'
            icon='/play.svg'
            variant='btn_white_text'
            />
        </div>
    </div>
    <div className='relative flex flex-1 items-start'>
           {isClicked && <Button variant='btn_white' title="Expand" icon='/expand.png' onClick={handleClick} ></Button>}
            <div className={isClicked?'hidden': 'relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'}>
            <div className='flex flex-col'>
                <div className='flexBetween'>
                    <p className='regular-16 text-white'>Fatura</p>
                    <Image onClick={handleClick} src="/close.svg" alt='close' width={24} height={24} />
                </div>
                <p className='bold-20 text-white'>Sütaş Beyaz Peynir</p>
            </div>
                <div className='flexBetween'>
                    <div className='flex flex-col'>
                        <p className='regular-16 text-white'>32₺</p>
                        <p className='bold-20 text-white'>milka beyaz çikolata  </p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='regular-16 text-white'>Fiyat</p>
                        <p className='bold-20 text-white'>25₺</p>
                    </div>
                </div>
        </div>
    </div>
       </section>
  )
}

export default Hero
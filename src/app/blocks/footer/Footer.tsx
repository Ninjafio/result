import React from 'react'
import { Logo, VK, TG } from '@/app/img'
import Image from 'next/image'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='Footer'>
        <Image src={Logo} alt='huh' />
        <div className="social">
        <a href="https://vk.com/midisit" target='_blank'>
        <Image src={VK} alt='huh' />
        </a>
        <Image src={TG} alt='huh' />

        </div>
        <div className='Footer_txt'>
            <span>г. Челябинск, ул. Ворошилова, 12</span>
            <span>+7 (351) 202-00-73</span>
            <span>info@midis.ru</span>
        </div>
    </div>
  )
}

export default Footer
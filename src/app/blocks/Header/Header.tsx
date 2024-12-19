import React from 'react'
import "./Header.scss"
import Image from 'next/image'
import { Logo } from '@/app/img'

const Header = () => {
  return (
    <div className='Header'>
        <div className="Header_left">
            <Image src={Logo} alt=''></Image> 
            <p>Международный Институт Дизайна и Сервиса</p></div>
        <div className="Header_center">
            <a href="" className='link'>Модули обучения</a>
            <a href="" className='link'>Обзор колледжа</a>
        </div>
        <div className="Header_right">+7 (351) 202-00-73</div>


    </div>
  )
}

export default Header
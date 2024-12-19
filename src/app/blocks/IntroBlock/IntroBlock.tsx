"use client"
import React, { useState } from 'react'
import "./IntroBlock.scss"
import { ArrowBack, Portrait } from '@/app/img'
import Image from 'next/image'

const IntroBlock = () => {

    const [isLeft, setIsLeft] = useState(false)
    const [isRight, setIsRight] = useState(false)

    const clickOnLeftModal = () => {
        
        setIsLeft(true)
        setIsRight(false)
     
    }

    const clickOnRightModal = () =>{
        setIsLeft(false)
        setIsRight(true)
    }

    const turnOffModal = () => {
        setIsLeft(false)
        setIsRight(false)
    }


  return (
    <div className='IntroBlock'>
        <div className="IntroBlock_container">

        
        <div className={`IntroBlock_container_main_left_modal${isLeft? " leftModalOpened":" leftModalNotOpened"}`}>
            
            <div className="IntroBlock_container_main_left_modal_header">
                <Image src={ArrowBack} alt='' style={{cursor:"pointer"}}  onClick={()=>setIsLeft(false)}></Image>
                <p>Назад</p>
            </div>

            

            <div className="IntroBlock_container_main_left_modal_main">
                <div className="IntroBlock_container_main_left_modal_main_title">Стоимость обучения </div>
                <div className="IntroBlock_container_main_left_modal_main_txt">1 курс: 2024-2025 учебный год </div>
                <div className="IntroBlock_container_main_left_modal_main_txt">115 тыс. р в год</div>
            </div>

        </div>
        

        <div className={`IntroBlock_container_main_right_modal${isRight? " rightModalOpened":" rightModalNotOpened"}`}>
            
            <div className="IntroBlock_container_main_right_modal_header">
                <Image src={ArrowBack} alt='' onClick={()=>setIsRight(false)}></Image>
                <p>Назад</p>
            </div>

            

            <div className="IntroBlock_container_main_right_modal_main">
                <div className="IntroBlock_container_main_right_modal_main_title">Контакты</div>
                <div className="IntroBlock_container_main_right_modal_main_subTitle">Приемная комиссия</div>
                <div className="IntroBlock_container_main_right_modal_main_txt">
                    кабинет: 406
                </div>
                <div className="IntroBlock_container_main_right_modal_main_txt">
                    телефон: 8 (351) 202-00-73
                </div>
                <div className="IntroBlock_container_main_right_modal_main_txt">
                    почта: pk@midis.ru
                </div>
                
            </div>

        </div>
        

            <div className="IntroBlock_container_header">
                <div className="IntroBlock_container_header_el" onClick={()=>clickOnLeftModal()}>Стоимость</div>
                <div className="IntroBlock_container_header_el" onClick={()=>clickOnRightModal()}>Контакты</div>
            </div>
            <div className="IntroBlock_container_main">
                <div className="IntroBlock_container_main_left">

                    <Image src={Portrait} alt=''></Image>

                </div>


                <div className={`IntroBlock_container_main_right${isLeft? " modalOpen": ""}`}>

                    

                    <p className='IntroBlock_container_main_right_title'>Разработка веб и мультимедийных приложений</p>
                    <p className='IntroBlock_container_main_right_additional'> 09.02.07 Информационные системы и программирование</p>
                    <p className='IntroBlock_container_main_right_txt'>Погрузись в мир IT и получи мощную практическую подготовку, благодаря которой ты сможешь создавать функциональные сайты и мобильные приложения, научишься программировать с использованием ООП на С#, проектировать и разрабатывать базы данных любой сложности. Или создашь свою игру с собственной игровой вселенной. Ещё во время обучения ты сможешь работать разработчиком, продакт-менеджером или запустишь свой стартап.</p>
                    <ul>
                        <li>Срок обучения: 3 года 10 месяцев</li>
                        <li>Форма обучения: очная</li>
                        <li>Начало занятий: сентябрь 2025 г.</li>
                    </ul>
                    <button>115 000 ₽/год</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroBlock
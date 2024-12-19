import React from 'react'
import "./ModuleBlock.scss"
import ModuleCard from '@/app/components/moduleCard/ModuleCard'
import Image from 'next/image'
import { ParticleM } from '@/app/img'

const ModuleBlock = () => {
  return (
        <div className="ModuleBlock__BG">
            <Image className='ModuleBlock__img1' src={ParticleM} alt='huh' />
            <Image className='ModuleBlock__img2' src={ParticleM} alt='huh' />
            <h2>
                Модули обучения
            </h2>
            <div className="ModuleBlock__cardsContainer">

            <ModuleCard title='Web-разработка' 
            str1='Frontend-разработка' 
            str2='Backend-разработка' 
            str3='Разработка интерфейсов и веб-дизайн' />

            <ModuleCard title='Профессиональное программирование на C#' 
            str1='Алгоритмы и структуры данных' 
            str2='Объектно-ориентированное программирование на C#' 
            str3='Разработка приложений' />

            <ModuleCard title='Проектирование и разработка мобильных приложений' 
            str1='Архитектура мобильных приложений' 
            str2='Разработка на React.js. VK Mini Apps' 
            str3='Разработка на Kotlin' />
            
            <ModuleCard title='Проектирование и разработка баз данных' 
            str1='Архитектура баз данных' 
            str2='Разработка баз данных' 
            str3='Администрирование и безопасность' />
            
            <ModuleCard title='Разработка информационных систем' 
            str1='Управление разработкой цифрового продукта' 
            str2='Проектирование архитектуры информационных систем' 
            str3='Тестирование информационных систем' />

            <ModuleCard title='Разработка компьютерных игр  и мультимедийных приложений' 
            str1='Простые и многопользовательские игры' 
            str2='VK Mini Apps и VK Games' 
            str3='Браузерные игры и мультимедийные приложения' />
            </div>
        </div>
  )
}

export default ModuleBlock
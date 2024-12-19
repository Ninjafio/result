import React from 'react'
import { IModuleCard } from '@/app/types'
import { Line } from '@/app/img'
import Image from 'next/image'
import "./TeacherCard.scss"

const TeacherCard:React.FC<IModuleCard> = ( {title, str1, str2, str3}: IModuleCard ) => {
  return (
    <>
    <div className='TeacherCard'>
        <div className="TeacherCard__title">
        {title}
        </div>
        <ul className='TeacherCard__txt'>
            <li className='TeacherCard__name'>{str1}</li>
            <li className='TeacherCard__vac'>{str2}</li>
            <li className='TeacherCard__str'>{str3}</li>
        </ul>
    </div>
    </>
  )
}

export default TeacherCard
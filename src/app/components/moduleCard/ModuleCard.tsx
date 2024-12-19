import React from 'react'
import { IModuleCard } from '@/app/types'
import { Line } from '@/app/img'
import Image from 'next/image'
import "./ModuleCard.scss"

const ModuleCard:React.FC<IModuleCard> = ( {title, str1, str2, str3}: IModuleCard ) => {
  return (
    <>
    <div className='ModuleCard'>
        <div className="ModuleCard__title">
        {title}
        </div>
        <ul className='ModuleCard__txt'>
            <li className='ModuleCard__str'>{str1}</li>
            <li className='ModuleCard__str'>{str2}</li>
            <li className='ModuleCard__str'>{str3}</li>
        </ul>
        <Image className='ModuleCard__img' src={Line} alt='huh' />
    </div>
    </>
  )
}

export default ModuleCard
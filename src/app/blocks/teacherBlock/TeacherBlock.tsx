import React from "react";
import Image from "next/image";
import TeacherCard from "@/app/components/teacherCard/TeacherCard";
import "./TeacherBlock.scss";
import { Hajatova, Kondakov, Majuhin } from "@/app/img";

const TeacherBlock = () => {
  return (
    <div className="TeacherBlock">
      <h2 className="TeacherBlock_title">Наши преподаватели</h2>
      <div className="Teachers_container">
        <div className="Teachers_container__line">
          <Image
            src={Kondakov}
            className="TeacherBlock_img kadik"
            alt="huh"
          />
          <TeacherCard
            title="Кондаков Сергей Александрович"
            str1="Заведующий кафедры"
            str2=""
            str3=""
          />
        </div>
        <div className="Teachers_container__line">
          <TeacherCard
            title="Хаятова Лилия Рэхтямовна"
            str1="Преподаватель"
            str2="Разработка пользовательских интерфейсов"
            str3=""
          />
          <Image
            src={Hajatova}
            className="TeacherBlock_img hajatova"
            alt="huh"
          />
        </div>
        <div className="Teachers_container__line">
          <Image
            src={Majuhin}
            className="TeacherBlock_img hajatova"
            alt="huh"
          />
          <TeacherCard
            title="Мажухин Михаил Александрович"
            str1="Преподаватель"
            str2="Геймдизайн"
            str3=""
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherBlock;

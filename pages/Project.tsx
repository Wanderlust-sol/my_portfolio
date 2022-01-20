import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Project.module.scss';

const Project = () => {
  const data = [
    {
      title: 'BF-Test',
      url: '',
      photoUrl: '',
      lang: 'Javascript, React.js',
      role: 'Frontend Development 40%',
      description:
        'This project is for web developers who does not decide their role of web developments. Thorughout a simple test, it will let you know which role is suit for you among these jobs ( FullStack, Frontend, Backend). This is only for fun. ',
    },
    {
      title: 'My-Website',
      url: '',
      photoUrl: '',
      lang: 'Typescript, Next.js',
      role: 'Frontend Development 100%',
      description:
        'This is my website to introduce my web-development experience and my photography',
    },
  ];
  return (
    <div className={style.bg}>
      <Swiper direction={'horizontal'} loop centeredSlides>
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <div>{data.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;

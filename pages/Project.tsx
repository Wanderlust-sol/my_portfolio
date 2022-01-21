import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { BsPinAngleFill } from 'react-icons/bs';
import style from './Project.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Project = () => {
  const data = [
    {
      title: 'BF-Test',
      url: 'http://bftest.wecode.co.kr',
      photoUrl: '/bf-test.jpeg',
      git: 'https://github.com/Wanderlust-sol/BF_test_front-end',
      lang: 'Javascript, React.js',
      role: '프론트엔드 개발 40% - 개발 리드',
      description:
        // 'This project is for web developers who does not decide their role of web developments. Thorughout a simple test, it will let you know which role is suit for you among these jobs ( FullStack, Frontend, Backend). This is only for fun. ',
        '같이 개발공부를 했던 동료들과 취업전 가볍게 만든 토이 프로젝트입니다. 웹개발을 처음 시작할 때 저희들이 고민해왔던것을 이 프로젝트로 풀어내보았습니다. 프론트엔드, 백엔드, 풀스택 중에 어떤 역할이 자신에게 더 잘 맞을지 알려주는 심리테스트이지만 테스트는 테스트일뿐이므로 재미로만 봐주시길 바랍니다.',
    },
    // {
    //   title: 'My-Website',
    //   url: '',
    //   photoUrl: '',
    //   git: 'https://github.com/Wanderlust-sol/my_portfolio',
    //   lang: 'Typescript, Next.js',
    //   role: 'Frontend Development 100%',
    //   description:
    //     'This is my website to introduce my web-development experience and my photography',
    // },
  ];
  return (
    <div className={style.bg}>
      {/* <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        loop
        centeredSlides={true}
        centeredSlidesBounds={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <div>{data.title}</div>
          </SwiperSlide>
        ))}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}

      {data.map((data) => (
        <div className={style.wrapper}>
          <div className={style.image}>
            <Image src={data.photoUrl} width="400px" height="400px" />
          </div>
          <div className={style.contentsWrapper}>
            <p className={style.title}>{data.title}</p>
            <div className={style.descWrapper}>
              <div className={style.bar} />
              <p className={style.description}>{data.description}</p>
            </div>
            <div className={style.contentBox}>
              <BsPinAngleFill />
              <span className={style.tag}>도메인</span>
              <a href={data.url} target="_blank">
                {data.url}
              </a>
            </div>
            <div className={style.contentBox}>
              <BsPinAngleFill />
              <span className={style.tag}>Git</span>
              <a href={data.git} target="_blank">
                {data.git}
              </a>
            </div>
            <div className={style.contentBox}>
              <BsPinAngleFill />
              <span className={style.tag}>Frontend</span>
              <p> {data.lang}</p>
            </div>
            <div className={style.contentBox}>
              <BsPinAngleFill />
              <span className={style.tag}>기여도</span>
              <p> {data.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;

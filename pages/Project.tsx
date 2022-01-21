import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { BsPinAngleFill } from 'react-icons/bs';
import style from './Project.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type DataListType = {
  title: string;
  url: string;
  photoUrl: string;
  git: string;
  lang: {
    front: string;
    back: string;
    deploy: string;
  };
  role: string;
  description: string;
};

const Project = () => {
  const data: DataListType[] = [
    {
      title: 'BF-Test',
      url: 'http://bftest.wecode.co.kr',
      photoUrl: '/bf-test.jpeg',
      git: 'https://github.com/Wanderlust-sol/BF_test_front-end',
      lang: { front: 'Javascript, React.js', back: 'Django', deploy: 'AWS EC2' },
      role: '프론트엔드 개발 40% / 개발 리드',
      description:
        // 'This project is for web developers who does not decide their role of web developments. Thorughout a simple test, it will let you know which role is suit for you among these jobs ( FullStack, Frontend, Backend). This is only for fun. ',
        '같이 개발공부를 했던 동료들과 취업전 가볍게 만든 토이 프로젝트입니다. 웹개발을 처음 시작할 때 저희들이 고민해왔던것을 이 프로젝트로 풀어내보았습니다. 프론트엔드, 백엔드, 풀스택 중에 어떤 역할이 자신에게 더 잘 맞을지 알려주는 심리테스트이지만 테스트는 테스트일뿐이므로 재미로만 봐주시길 바랍니다. 배포 2일만에 이용자수 10,000명을 달성하는 뿌듯한 쾌거를 이루기도 했습니다.',
    },
    {
      title: 'My-Website',
      url: '',
      photoUrl: '',
      git: 'https://github.com/Wanderlust-sol/my_portfolio',
      lang: { front: 'Typescript, Next.js', back: '', deploy: 'Vercel' },
      role: '프론트엔드 개발 100%',
      description:
        // 'This is my website to introduce my web-development experience and my photography',
        '개발을 통해 다양한 시도를 해보고 제 자신을 보여줄 포트폴리오 사이트입니다. 또한, 사진 촬영을 취미로 두고 있어 사진들을 보여줄 창구이기도 합니다.',
    },
  ];
  return (
    <div className={style.bg}>
      <Swiper
        className={style.swiper}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <div className={style.wrapper}>
              <div className={style.image}>
                {data.photoUrl !== '' && <Image src={data.photoUrl} width="400px" height="400px" />}
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
                  <p> {data.lang.front}</p>
                </div>
                {data.lang.back !== '' && (
                  <div className={style.contentBox}>
                    <BsPinAngleFill />
                    <span className={style.tag}>Backend</span>
                    <p> {data.lang.back}</p>
                  </div>
                )}
                <div className={style.contentBox}>
                  <BsPinAngleFill />
                  <span className={style.tag}>Deployment</span>
                  <p> {data.lang.deploy}</p>
                </div>
                <div className={style.contentBox}>
                  <BsPinAngleFill />
                  <span className={style.tag}>기여도</span>
                  <p> {data.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;

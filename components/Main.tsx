import React, { useState } from 'react';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { useCommonState } from '../context/commonContext';
import style from './Main.module.scss';
import examplePic from '../public/example1.jpg';

const Main = () => {
  const [isParallax, setIsParallax] = useState<boolean>(false); // 좌우로 Parallax 기능 활성화 여부
  const { isClickedMenu, isHoverMenu } = useCommonState();

  return (
    <>
      <div className={style.bg} onClick={() => setIsParallax(!isParallax)}>
        <Parallax className={style.customClass} y={[-50, 50]}>
          <div className={isParallax ? style.covering : style.cover}>
            {isParallax && (
              <div className={style.selfbox}>
                <div className={style.name}>TAESOL KWON</div>
                <div className={style.job}>Front-end Developer</div>
                <div className={style.introduction}>
                  Who loves creating cool Interface and animation.
                  <br />
                  Who loves photography and surfing.
                </div>
              </div>
            )}
          </div>
          <div className={isParallax ? style.movingHello : style.hello}>
            <div className={style.wel}>WEL</div>
            <div>
              COME<span style={{ color: '#b2dffb' }}>.</span>
            </div>
          </div>
        </Parallax>
        {isParallax && !isHoverMenu && !isClickedMenu && (
          <>
            <span className={style.scrollArrow}>Scroll</span>
            <IoIosArrowRoundDown className={style.arrowIcon} />
          </>
        )}
      </div>
      <Parallax className={style.customClass} y={[0, 0]}>
        <div className={isParallax ? style.mainBottomVisible : style.mainBottomInvisible}>
          <Image src={examplePic} alt="example" />
        </div>
      </Parallax>
    </>
  );
};

export default Main;

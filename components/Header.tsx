import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import Menu from './Menu';
import { useCommonDispatch, useCommonState } from '../context/commonContext';
import style from './Header.module.scss';
import { useRouter } from 'next/router';

const Header = () => {
  const dispatch = useCommonDispatch();
  const { isHoverMenu, isClickedMenu } = useCommonState();
  const router = useRouter();

  return (
    <header>
      <div className={style.headerTop}>
        <span className={style.logoName} onClick={() => router.push('/')}>
          WANDERLUST_SOL
        </span>
        <ul className={style.language}>
          <li>KO.</li>
          {/* <li style={{ marginLeft: 8 }}>EN.</li> */}
        </ul>
      </div>
      <div
        className={style.headerLeft}
        style={{ transition: '1s ease', width: isHoverMenu ? '120px' : '55px' }}
      >
        <div
          className={style.navToggle}
          onMouseOver={() => dispatch({ type: 'HOVER', payload: true })}
          onMouseOut={() => dispatch({ type: 'HOVER', payload: false })}
          onClick={() => dispatch({ type: 'CLICKED', payload: true })}
        >
          <div className={style.menubar}>
            <div className={style.menubar1}></div>
            <div className={style.menubar2}></div>
            <div className={style.menubar3}></div>
          </div>
          <div className={style.menuName}>
            <span className={style.menuName1}>M</span>
            <span className={style.menuName2}>E</span>
            <span className={style.menuName3}>N</span>
            <span className={style.menuName4}>U</span>
          </div>
        </div>
        {isClickedMenu && <Menu />}
      </div>
      <div className={style.headerRight}>
        <ul className={style.navSocial}>
          <li className={style.navSocial1}>
            <a href="https://www.instagram.com/wanderlust_sol/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className={style.navSocial2}>
            <a href="https://www.youtube.com/channel/UCK-kGx26kYElTILPAqNMd5A" target="_blank">
              <FaYoutube />
            </a>
          </li>
          <li className={style.navSocial3}>
            <a href="https://github.com/Wanderlust-sol" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.headerBottom}></div>
    </header>
  );
};

export default Header;

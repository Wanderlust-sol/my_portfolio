import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import { useCommonDispatch } from '../context/commonContext';
import style from './Menu.module.scss';

const Menu = () => {
  const [closeMenu, setCloseMenu] = useState<boolean>(false);
  const [routeName, setRouteName] = useState<string>('');
  const dispatch = useCommonDispatch();
  const router = useRouter();

  // close 버튼 눌렀을때 작동하는 함수
  const handleClose = () => {
    setCloseMenu(true);
    setTimeout(() => {
      dispatch({ type: 'CLICKED', payload: false });
      setCloseMenu(false);
    }, 1000);
  };

  useEffect(() => {
    setRouteName(router.pathname.replace('/', ''));
    return () => {
      setRouteName(router.pathname.replace('/', ''));
    };
  }, [router.pathname]);

  return (
    <div>
      <div
        className={style.menuVisible}
        style={{ transition: '1s ease', width: closeMenu ? '0%' : '80%' }}
      >
        <div className={style.closeIcon} onClick={handleClose}>
          <MdClose />
        </div>
        <div className={style.menusList}>
          <ul className={style.menus}>
            <div className={style.menuItem} onClick={handleClose}>
              <Link href="/">
                <li className={style.menuName1}>HOME</li>
              </Link>
              <div
                className={style.menuHighlight1}
                style={{ opacity: routeName === '' ? 1 : 0 }}
              ></div>
            </div>
            <div className={style.menuItem} onClick={handleClose}>
              <Link href="/Project">
                <li className={style.menuName2}>PROJECT.</li>
              </Link>
              <div
                className={style.menuHighlight2}
                style={{ opacity: routeName === 'Project' ? 1 : 0 }}
              ></div>
            </div>
            <div className={style.menuItem} onClick={handleClose}>
              <Link href="/Photography">
                <li className={style.menuName3}>PHOTOGRAPHY.</li>
              </Link>
              <div
                className={style.menuHighlight3}
                style={{ opacity: routeName === 'Photography' ? 1 : 0 }}
              ></div>
            </div>
          </ul>
          <div className={style.contacts}>
            <p>Seoul, South Korea</p>
            <p>+82(0)1087882966</p>
            <p>taylorkwon92@gmail.com</p>
            <p>
              <a href="https://velog.io/@taylorkwon92" target="blank">
                velog.io/@taylorkwon92
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

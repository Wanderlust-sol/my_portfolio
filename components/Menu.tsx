import React, { useState } from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { useCommonDispatch } from '../context/commonContext';
import style from './Menu.module.scss';

const Menu = () => {
  const [closeMenu, setCloseMenu] = useState<boolean>(false);
  const dispatch = useCommonDispatch();

  // close 버튼 눌렀을때 작동하는 함수
  const handleClose = () => {
    setCloseMenu(true);
    setTimeout(() => {
      setCloseMenu(false);
      dispatch({ type: 'CLICKED', payload: false });
    }, 1000);
  };
  return (
    <div>
      <div
        className={style.menuVisible}
        style={{ transition: '1s ease', width: closeMenu && '0%' }}
      >
        <div className={style.closeIcon} onClick={handleClose}>
          <MdClose />
        </div>
        <div className={style.menusList}>
          <ul className={style.menus}>
            <div className={style.menuItem}>
              <li className={style.menuName1}>WANDERLUST_SOL</li>
              <div className={style.menuHighlight1}></div>
            </div>
            <div className={style.menuItem}>
              <li className={style.menuName2}>PROJECT.</li>
              <div className={style.menuHighlight2}></div>
            </div>
            <div className={style.menuItem}>
              <Link href="/Photography">
                <li className={style.menuName3}>PHOTOGRAPHY.</li>
              </Link>
              <div className={style.menuHighlight3}></div>
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

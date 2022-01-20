import React from 'react';
import style from './Alert.module.scss';

interface IProps {
  text: string;
  handleClick: () => void;
}
const Alert = ({ text, handleClick }: IProps) => {
  return (
    <>
      <div className={style.modal} />
      <div className={style.wrapper}>
        <div className={style.contentWrapper}>
          <p className={style.content}>{text}</p>
          <div className={style.btn} onClick={handleClick}>
            확인
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;

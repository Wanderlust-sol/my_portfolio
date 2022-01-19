import React from 'react';
import style from './Photography.module.scss';
import mockData from '../dummy/mock_photo.json';
import Image from 'next/image';

const Photography = () => {
  return (
    <>
      <div className={style.bg}>
        {mockData.map(({ url, location }, index) => {
          return (
            <div className={style.wrapper} key={index}>
              <div className={style.photoBox}>
                <Image
                  src={url}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt="photography"
                  priority
                />
              </div>
              <div>{location}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Photography;

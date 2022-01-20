import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Alert from '../components/Alert';

import style from './Photography.module.scss';
import mockData from '../dummy/mock_photo.json';

const arr = [...Array(18)].map((v, i) => i + 1);

const Photography = () => {
  const [modal, setModal] = useState<boolean>(true);
  const router = useRouter();

  return (
    <>
      {modal && (
        <Alert
          text={'현재 개발중인 카테고리 입니다.\n빠른 시일내에 업데이트해서 돌아오겠습니다:)'}
          handleClick={() => {
            setModal(false);
            router.back();
          }}
        />
      )}
      <div className={style.bg}>
        <div className={style.container}>
          {arr.map((num) => {
            return (
              // <div className={style.wrapper} key={num}>
              <div className={style.photoBox} key={num}>
                <Image
                  src={`/photography/photo_${num}.jpg`}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt="photography"
                  priority
                />
              </div>
              // {/* <div>{location}</div> */}
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Photography;

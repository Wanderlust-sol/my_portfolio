import React from 'react';
import Header from './Header';
import Main from './Main';
import style from './Layout.module.scss';

const Layout = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Layout;

import React from 'react';
import * as S from './appLayout.styled';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/common/Header/Header';

const AppLayout = () => {
  return (
    <S.AppLayout>
      <Header />
      <Outlet />
      <Footer />
    </S.AppLayout>
  );
};

export default AppLayout;

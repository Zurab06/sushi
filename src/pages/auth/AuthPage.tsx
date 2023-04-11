import React from 'react';
import AuthForm from './auth-form/AuthForm';
import styles from './AuthPage.module.scss';
import Registr from './registration/Registr';
import { Route, Routes } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className={styles.auth_page}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;

import React from 'react';
import AuthForm from './auth-form/AuthForm';
import styles from './AuthPage.module.scss';
import Registr from './registration/Registr';
const AuthPage = () => {
  return (
    <div className={styles.auth_page}>
      <AuthForm />
      <Registr />
    </div>
  );
};

export default AuthPage;

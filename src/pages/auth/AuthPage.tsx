import React from 'react';
import AuthForm from './auth-form/AuthForm';
import styles from './AuthPage.scss';
const AuthPage = () => {
  return (
    <div className={styles.auth_page}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;

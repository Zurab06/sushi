import { Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './AuthForm.scss';

const AuthForm: React.FC = () => {
  return (
    <div className={styles.authForm}>
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <form className={styles.authForm__form}>
        <TextField
          label="Логин"
          size="small"
          margin="normal"
          className={styles.authForm__input}
          fullWidth={true}
        />
        <TextField
          label="Пароль"
          type="password"
          size="small"
          margin="normal"
          className={styles.authForm__input}
          fullWidth={true}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;

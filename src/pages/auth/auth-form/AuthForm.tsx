import { Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import styles from './AuthForm.scss';
import { loginValidation, passwordValidation } from './validation';
import { useAppDispatch } from '../../../app/store';
import { userLogin } from '../../../app/features/authSlice';
import { Link } from 'react-router-dom';

// import { useSelector } from 'react-redux';


interface ISignInForm {
  username: string;
  password: string;
} //update
const AuthForm: React.FC = () => {
  // const isAuth = useSelector(isAuthMe);
  // console.log(isAuth);

  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<ISignInForm> = async (params) => {
    const data = await dispatch(userLogin(params));
    if (!data.payload) {
      alert('Произошла оштбка');
    }
  };

  // if (isAuth) {
  //   return <Navigate to={'/'} />;
  // }

  return (
    <div className={styles.authForm}>
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm__form}>
        <Controller
          control={control}
          name="username"
          rules={loginValidation}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className={styles.authForm__input}
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.username?.message}
              helperText={errors.username?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Пароль"
              size="small"
              margin="normal"
              className={styles.authForm__input}
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
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
      <Link to="/registration">
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}>
          Зарегестрироваться
        </Button>
      </Link>
    </div>
  );
};

export default AuthForm;

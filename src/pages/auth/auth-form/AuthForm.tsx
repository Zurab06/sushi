import { Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';

import styles from './AuthForm.scss';
import { loginValidation, passwordValidation } from './validation';

interface ISignInForm {
  login: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });
  console.log(errors);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
  return (
    <div className={styles.authForm}>
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm__form}>
        <Controller
          control={control}
          name="login"
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
              error={!!errors.login?.message}
              helperText={errors.login?.message}
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
    </div>
  );
};

export default AuthForm;

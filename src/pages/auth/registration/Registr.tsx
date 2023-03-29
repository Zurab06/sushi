import React from 'react';
import TextField from '@mui/material/TextField';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import styles from './Registr.module.scss';
import { loginValidation, passwordValidation } from '../auth-form/validation';
import { Button } from '@mui/material';
type Inputs = {
  login: string;
  password: string;
};

const Registr = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className={styles.registrForm__input}
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
              className={styles.registrForm__input}
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button variant="contained" color="success">
          Зарегестрироваться
        </Button>
      </form>
    </div>
  );
};

export default Registr;

import React from "react";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import styles from "./Registr.module.scss";
import { loginValidation, passwordValidation } from "../auth-form/validation";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../../app/store";
import { userRegistr } from "../../../app/features/authSlice";

type Inputs = {
  username: string;
  password: string;
};

const Registr = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(userRegistr(data));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          rules={loginValidation}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className={styles}
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
              className={styles.registrForm__input}
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
          color="success"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default Registr;

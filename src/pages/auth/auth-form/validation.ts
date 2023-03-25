export const loginValidation = {
  required: 'Поле не должно быть пустым',
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские буквы';
    }
    return true;
  },
};

export const passwordValidation = {
  required: 'Поле не должно быть пустым',
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль не должен быть меньше 6-ти символов';
    }
    return true;
  },
};

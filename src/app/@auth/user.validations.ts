import { CreateUserDto } from './user';
import { test, enforce, create, omitWhen, only } from 'vest';

export const credentialsValidations = create((model: CreateUserDto, field: string) => {
  // only execute validation for this field
  only(field);
  emailValidations(model, 'email');

  test(`password`, 'Contraseña es requerido.', () => {
    enforce(model.passwords.password).isNotBlank();
  });
}); 

export const userValidations = create((model: CreateUserDto, field: string) => {
  // only execute validation for this field
  only(field);

  test('fullName', 'Nombre completo es requerido', () => {
    enforce(model.fullName).isNotBlank();
  });

  emailValidations(model, 'email');
  passwordValidations(model.passwords, 'passwords');
});

const emailValidations = (model: {email: string}, field: string): void => {
  test(`${field}`, 'Correo electrónico es requerido', () => {
    enforce(model.email).isNotBlank();
  });

  omitWhen(!model.email, () => {
    test(`${field}`, 'Correo no válido', () => {
      enforce(model.email).matches(/.+@.+\..+/);
    })
  });
}

const passwordValidations = (model: {password: string, confirmPassword: string}, field: string): void => {
  test(`${field}.password`, 'Contraseña es requerido.', () => {
    enforce(model.password).isNotBlank();
  });
  test(`${field}.confirmPassword`, 'Confirmar contraseña es requerido.', () => {
    enforce(model.confirmPassword).isNotBlank();
  });
  // don't check if passwords match if the passwords aren't both filled in
  omitWhen(
    !model.password || !model.confirmPassword,
    () => {
      test(`${field}`, 'Contraseñas no coinciden', () => {
        enforce(model.password).equals(
          model.confirmPassword
        );
      });
    }
  );
  // don't check the length if the password isn't filled in yet
  omitWhen(!model.password, () => {
    test(`${field}.password`, 'Debe contener al menos 8 caracteres', () => {
      enforce(model.password).longerThan(7);
    });
    test(
      `${field}.password`,
      'Debe contener mayúsculas, minúsculas y números',
      () => {
        enforce(model.password).matches(
          /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        );
      }
    );
  });
}

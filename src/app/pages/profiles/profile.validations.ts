import { create, enforce, only, test } from 'vest';
import { Profile } from './profiles.types';

export const profileValidations = create((model: Profile, field: string) => {
  // only execute validation for this field
  only(field);

  test(`profileName`, 'Contraseña es requerido.', () => {
    enforce(model.profileName).isNotBlank();
  });
});

export interface User {
    id: number;
    email: string;
    fullName: string;
    token: string;
}

export class CreateUserDto {
    public email = '';
    public passwords = {
      password: '',
      confirmPassword: '',
    };
    public fullName = '';
  
    constructor(user?: Partial<User>) {
      if (user) {
        Object.assign(this, { ...user });
      }
    }
  }
  
  export class Credentials {
    public email = '';
    public password = '';
  }
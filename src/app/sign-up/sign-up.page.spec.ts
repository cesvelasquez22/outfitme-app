import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SignUpPage } from './sign-up.page';
import { IonButton, IonModal, IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPage],
      imports: [IonicModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register action', () => {
    const buttons = compiled.querySelectorAll('ion-button');
    const registerButton = buttons[1];
    spyOn(component, 'register');
    registerButton.click();
    expect(component.register).toHaveBeenCalled();
  });

  it('should register user', () => {
    const user = {
      email: 'example@gmail.com',
      password: '12345',
      confirmPassword: '12345',
    };
  
    const response = {
      success: true,
      message: 'User created successfully',
      token: 'token',
    };
    expect(component.register(user)).toEqual(response);
  });
});

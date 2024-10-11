import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { TRegister } from '../types/TRegister';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let scoreChangeSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SignUpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    scoreChangeSpy = spyOn(component.scoreChange, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit score and user data when form is valid', () => {
    component.clientForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      cpf: '123.456.789-00',
      birthday: '1990-01-01',
      cardHolderName: 'John Doe',
      cardNumber: '1234567812345678',
      expiryDate: '12/25',
      cvv: '123',
    });

    component.submitForm();
    expect(scoreChangeSpy).toHaveBeenCalled();
    const emittedValue: TRegister = scoreChangeSpy.calls.mostRecent().args[0];
    expect(emittedValue.score).toBeGreaterThanOrEqual(0);
    expect(emittedValue.score).toBeLessThan(1000);
  });

  it('should not emit score or user data when form is invalid', () => {
    component.clientForm.setValue({
      name: '',
      email: 'invalid-email',
      cpf: '',
      birthday: '',
      cardHolderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });

    component.submitForm();
    expect(scoreChangeSpy).not.toHaveBeenCalled();
  });
});

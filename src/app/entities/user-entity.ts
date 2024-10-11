import { Validators } from '@angular/forms';

export class User {
  constructor(
    name: string = '',
    email: string = '',
    birthday: string = '',
    cardHolderName: string = '',
    cardNumber: string = '',
    expiryDate: string = '',
    cvv: string = ''
  ) {}

  static getFormControls() {
    return {
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      birthday: ['', [Validators.required]],
      cardHolderName: ['', [Validators.required]],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      expiryDate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/),
        ],
      ],
      cvv: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
      ],
    };
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { User } from '../../entities/user-entity';
import { TRegister } from '../types/TRegister';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  @Input() score: number;
  @Output() scoreChange = new EventEmitter<TRegister>();

  user: User;
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.user = new User();
    this.clientForm = this.fb.group(User.getFormControls());
  }

  submitForm() {
    if (this.clientForm.valid) {
      this.user = { ...this.clientForm.value };
      this.score = this.generateScore();
      this.scoreChange.emit({ score: this.score, user: this.user });
    }
  }

  generateScore(): number {
    return Math.floor(Math.random() * 1000);
  }
}

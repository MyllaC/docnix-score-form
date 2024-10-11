import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AnalysesResultComponent } from './analyses-result/analyses-result.component';
import { TRegister } from './types/TRegister';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    SignUpComponent,
    AnalysesResultComponent,
  ],
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent {
  score: number;
  analise: string;
  user: object;

  updateScore(prop: TRegister) {
    this.score = prop.score || 0;
    this.user = prop.user || {};
  }

  registerNewUser(): void {
    this.score = null;
    this.user = null;
  }
}

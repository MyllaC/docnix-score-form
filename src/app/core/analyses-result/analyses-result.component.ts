import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../entities/user-entity';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-analyses-result',
  standalone: true,
  templateUrl: './analyses-result.component.html',
  imports: [ButtonComponent, HeaderComponent],
})
export class AnalysesResultComponent {
  @Input() score: number = 0;
  @Input() user: User;
  @Output() newUser = new EventEmitter<number>();

  analysis: string = '';

  ngOnInit() {
    this.analysis = this.analyzeScore(this.score);
  }

  analyzeScore(score: number): string {
    if (score < 500) {
      return 'Inapto';
    } else if (score <= 800) {
      return 'Apto com Limitações';
    } else {
      return 'Totalmente Apto';
    }
  }

  registerNewUser(): void {
    this.newUser.emit(this.score);
  }

  navigateToHelpPage(): void {
    // go to future help page
  }
}

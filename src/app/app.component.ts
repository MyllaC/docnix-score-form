import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './core/client-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'docnix-score-form';
}

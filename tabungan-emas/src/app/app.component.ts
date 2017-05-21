import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'tabungan-emas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplikasi Tabungan Emas';

  constructor(private authService : AuthService) { }
  
}

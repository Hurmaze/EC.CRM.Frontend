import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../DTOs/Requests/login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login(loginRequest: LoginRequest) : void {
    this.authService.login(loginRequest).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token);
    });
  }
}

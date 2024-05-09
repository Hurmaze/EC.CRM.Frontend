import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client, LoginRequest } from '../../services/proxies';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private client: Client) { }

  loginRequestControlGroqup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login(): void {
    const loginRequest = new LoginRequest(); // Instantiate an object of the LoginRequest class

    this.client.login(loginRequest).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token ? jwtDto.token : '');
    });
  }

  get email() { return this.loginRequestControlGroqup.get('email')!; }
  get password() { return this.loginRequestControlGroqup.get('password')!; }

  emailErrorMessage(): string {
    if (this.email.dirty) {

      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    return '';
  }
  passwordErrorMessage(): string {
    return this.password.dirty && this.password.hasError('required') ? 'You must enter a value' : '';
  }
}

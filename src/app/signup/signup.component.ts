import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    this.authService.signUp(this.email, this.password).then(() => {
      this.authService.signIn(this.email, this.password).then(() => {
        this.router.navigate(['/tasks']);
      }).catch((error) => {
        this.error = error.message;
      });
    }).catch((error) => {
      this.error = error.message;
    });
  }

}

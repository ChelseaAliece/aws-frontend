import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  email: String;
  dataRegister: any = {};

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };

    if (!this.validateService.validateRegister(user)) {
      alert('Please Fill in all Fields');
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      alert('Please use a valid email');
      return false;
    }

    this.authService.registerUser(user).subscribe((data) => {
      this.dataRegister = data;

      if (this.dataRegister.success) {
        alert('User is registered and can log in');
        this.router.navigate(['/login']);
      } else {
        alert('You could not register');
        this.router.navigate(['/register']);
      }
    });
  }
}

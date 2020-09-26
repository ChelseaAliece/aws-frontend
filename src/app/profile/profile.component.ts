import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  user: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private validateService: ValidateService
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe(
      (profile:any) => {
        this.user = profile.user;
      },
      (err) => {
        console.log(err);
        return false;
      }
    );
  }

  logout() {
    this.authService.logout();
    alert('You are logged out');
    this.router.navigate(['register']);
  }
}

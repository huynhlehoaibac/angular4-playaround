import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './User';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!!this.user && !!this.user.username && !!this.user.password) {
      this.authService.login(this.user).subscribe(
        value => {
          if (value) {
            if (this.authService.redirectUrl) {
              this.router.navigate([this.authService.redirectUrl]);
            } else {
              this.router.navigate(['/admin']);
            }
            localStorage.setItem('isLoggedIn', 'true');
          }
          else {
            localStorage.removeItem('isLoggedIn');
            console.log('Authentication fail!');
          }
        }
      );
    }
  }

}

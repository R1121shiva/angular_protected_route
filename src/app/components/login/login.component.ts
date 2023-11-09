import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  toastTitle: string = '';
  toastMessage: string = '';
  showToast: boolean = false;
  username: string = '';
  password: string = '';
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authservice.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  onSubmit() {
    const userid = this.username;
    const pass = this.password;
    this.authservice.loggedIn(userid, pass).subscribe(
      (result) => {
        Swal.fire({
          icon: 'success',
          title: "Logged in successfully!",
          text: 'Welcome back!',
        });
        this.router.navigate(['/admin']);
      },
      (err: Error) => {
        Swal.fire({
          icon: 'error',
          title: `${err.message}`,
          text: 'Welcome back!',
        });
        // this.toastTitle = 'Login Error';
        // this.toastMessage = err.message;
        // this.showToast = true;
      }
    );
  }
}

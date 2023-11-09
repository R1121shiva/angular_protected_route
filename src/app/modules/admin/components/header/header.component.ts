import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authservice : AuthService, private router : Router){
   
  }
  logout(){
    this.authservice.loggedOut();
    Swal.fire({
      icon: 'success',
      title: "Logged Out successfully!",
      text: 'Welcome back!',
    });
    this.router.navigate(['login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

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
    this.router.navigate(['login']);
  }
}

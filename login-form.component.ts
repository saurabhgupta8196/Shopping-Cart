import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayProductService } from '../display-product.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:DisplayProductService ) { }
  



  ngOnInit() {
  
  }

  loginUser(e){
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;

    if(username=="Somya" && password=="2108")
    {  this.user.setUserLoggedIn(); 
      console.log("Welcom");
       this.router.navigate(['welcome']);
    }
    else
    alert("invalid login details");
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import {DisplayProductService} from '../display-product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',

  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  constructor(private router:Router, private user:DisplayProductService ) { }

  ngOnInit() {
  }

  moveDash()
  { 
    this.router.navigate(['dashboard']);
}

}

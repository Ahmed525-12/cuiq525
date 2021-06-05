import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/parent/shared/directives/pipes/services/auth.service';

@Component({
  selector: 'app-ligin',
  templateUrl: './ligin.component.html',
  styleUrls: ['./ligin.component.css']
})
export class LiginComponent implements OnInit {
  headerimg='../assets/img/header.jpg'
  LoginForm!: FormGroup;
  constructor(
    private router:Router,
    private authservice:AuthService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),

      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),

      ]),
    });
  }
  login() {



    if (this.LoginForm.valid) {
      this.authservice.doLogin()
      this.router.navigate(['/layout/home'])
    }
      }

}

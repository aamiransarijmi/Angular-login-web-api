import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }




  submitted = false;
  faEnvelope = faEnvelope;
  faLock = faLock;
  // url = 'https://just-auth-api.herokuapp.com/api/account/login';
  loginForm: FormGroup;

  public name = "login here!";

  constructor(
    private formBuilder: FormBuilder,
    private _UserServiceService: UserServiceService,
    private _Router: Router

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    this._UserServiceService.loginData(this.loginForm.value)
      .subscribe(
        data => {
          if (data && data.success) {
            sessionStorage.setItem('token', data.data.token);

            this._Router.navigate(['/profile']);

          }
          else {
            alert('Invalid credentials...!!');
          }
        },
        error => console.log('error', error)
      )
  }


  // if (this.loginForm.valid) {
  //   this._HttpClient.post<responseBase>(this.url, this.loginForm.value)
  //     .subscribe(
  //       data => {
  //         sessionStorage.setItem('token', data.data.token);
  //         if (data && data.success) {

  //           this._Router.navigate(['/profile']);

  //         }
  //         else {
  //           alert('Invalid credentials...!!');
  //         }
  //       },
  //       error => console.log('error', error)
  //     )
  // }

}
// export class responseBase {
//   data: any;
//   message: string;
//   success: boolean;

//   constructor() {
//     this.data = null;
//     this.message = '';
//     this.success = false;
//   }
// }
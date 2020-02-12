import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLock, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helper/helper.component';
// import { HttpClient } from '@angular/common/http';
import { } from '@angular/core/'
import { UserServiceService } from '../user-service.service';
@Component({
    selector: 'App-Registration-component',
    templateUrl: './Registration.component.html'
})

export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    faUser = faUser;
    faEnvelope = faEnvelope;
    faPhone = faPhone;
    faLock = faLock;
    faBuilding = faBuilding;

    public name = "register !";

    constructor(
        private formBuilder: FormBuilder,
        private _UserServiceService: UserServiceService
        // private _HttpClient: HttpClient
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['', Validators.required]
        }, {
                validator: MustMatch('password', 'confirmPassword')
            }
        );
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // if (this.registerForm.valid) {

        //     this._HttpClient.post('https://just-auth-api.herokuapp.com/api/account/register', this.registerForm.value).toPromise().then(() => {

        //         alert('Your registration is succesfully...');
        //         this.submitted = false;
        //         this.registerForm.reset();
        //     });
        // }
        this._UserServiceService.sendData(this.registerForm.value)
            .subscribe({
                next: (data) => {
                    if (data && data.success) {
                        alert('Your registration is succesfully...');
                        this.submitted = false;
                        this.registerForm.reset();
                    }

                },
                error: (error) => console.log('Error', error)
            })
    }
}
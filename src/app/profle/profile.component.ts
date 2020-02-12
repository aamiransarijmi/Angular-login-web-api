import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { TabsetComponent } from 'ngx-bootstrap';



@Component({
    selector: 'app-profile-component',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
    tabs = ["First name", "Last name", "UserName", "E - mail"];
    // @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;


    url = 'https://just-auth-api.herokuapp.com/api/account/userInfo'
    userData: User;

    constructor(private http: HttpClient,
        private _router: Router,
        private _UserServiceService: UserServiceService) { }
    ngOnInit() {
        this.send()
            .subscribe(
                data => this.userData = (data as any).data
            )
    }
    logout() {
        localStorage.removeItem("token");
        this._router.navigate(['/']);
    }
    send(): Observable<User> {
        const v = sessionStorage.getItem('token');
        return this.http.get<User>(this.url, {
            headers: {
                Authorization: `Bearer ${v}`
            }
        })
    }
    update() {
        debugger
        this._UserServiceService.updateData(this.userData.id, this.userData)
            .subscribe({
                next: (data) => {
                    debugger
                    if (data && data.success) {
                        // this._router.navigate('/profile');
                        alert('user details has been successfully updated');
                    } else {
                        alert('user details has not been successfully updated');
                    }
                },
                error: (error) => console.log('error', error)
            });
    }
    delete() {
        this.userData = {} as User;
        alert('you have successfully deleted');
    }
}
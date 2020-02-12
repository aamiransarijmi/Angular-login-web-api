import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Login } from './profle/user';
import { responseBase } from './models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'https://just-auth-api.herokuapp.com/api/account/register';
  urllogin = 'https://just-auth-api.herokuapp.com/api/account/login';
  urlUpdate = 'https://just-auth-api.herokuapp.com/api/account/';

  constructor(private http: HttpClient) { }

  sendData(userDetails: User): Observable<responseBase> {
    return this.http.post<responseBase>(this.url, userDetails);
  }
  loginData(logindetails: Login): Observable<responseBase> {
    return this.http.post<responseBase>(this.urllogin, logindetails)
  }

  updateData(id: string, userData: User): Observable<responseBase> {
    const t = sessionStorage.getItem('token');
    // return this.http.put(this.urlUpdate + userId, userData);
    return this.http.put<responseBase>(this.urlUpdate + id, userData, {
      headers: {
        Authorization: `Bearer ${t}`
      }
    })
  }

  private instructorList = [
    'Paul Spears',
    'Andrew Wiens',
    'John Baur',
    'Rachel Noccioli',
    'Lance Finney',
  ];


  getList(searchTerm: string) {
    // debugger
    // return this.instructorList
    //   .filter(instructor => {
    //     debugger
    //     return instructor === searchTerm || searchTerm === '';
    //   });
    return this.instructorList.filter(function (instructor) {
      debugger
      return instructor.indexOf(searchTerm) >= 0;
    });
  }


}
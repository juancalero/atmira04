import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uri = '/users';
  uri = 'http://localhost:8080/users'; // alta en http://localhost:8080/users/add, se le pasa objeto nombre, apell, etc
  uriAdd = 'http://localhost:8080/users/add';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  addUser(user) {
    return this
    .http
    .post(`${this.uriAdd}`, user).toPromise().then((data)=>console.log(data));
  }
  
}

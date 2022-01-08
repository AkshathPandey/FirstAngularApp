import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../app/model/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakedataserviceService {


  constructor(private hc:HttpClient) { }

  getUsers():Observable<any>{
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users')
  }

  getUsersById(id):Observable<any>{
   return this.hc.get<any>('https://jsonplaceholder.typicode.com/users/'+id)
  }
}

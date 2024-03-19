import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class MesusersService {
  

  baseURL= "http://localhost:8080/users";
  constructor(private httpClient: HttpClient) { }
  getallUsers(): Observable<Utilisateur[]>{
   
    return this.httpClient.get<Utilisateur[]>(`${this.baseURL}`);
   
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ModeGet, ModePost, Status, Zone } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly htpp : HttpClient = inject(HttpClient)

  getUser(email : string, pass : string) {
    return this.htpp.get<any>("https://6317ca93f6b281877c5d7785.mockapi.io/users?email=" + email + "&password=" + pass).pipe(
      map(response => {
        if (response) {
          console.log("respuesta", response);
          
          localStorage.setItem('userId', response[0].id)
          return true
        }
        else{
          return false
        }
      } 
      )
    )
  }
  getAllZones() {
    return this.htpp.get<Zone[]>("https://674531d6b4e2e04abea50775.mockapi.io/alarm-zones")
  }
  getUserName(id : any) {
    return this.htpp.get<any>("https://6317ca93f6b281877c5d7785.mockapi.io/users?id=" + id).pipe(
      map(response => {
        return response[0].email
      })
    )
  }
  postMode(data : ModePost) {
    return this.htpp.post<ModePost>("https://674531d6b4e2e04abea50775.mockapi.io/alarm-mode", data)
  }
  getModelsByUserId(id : any) {
    return this.htpp.get<ModeGet[]>("https://674531d6b4e2e04abea50775.mockapi.io/alarm-mode?userId=" + id)
  }
  postPanel(data : Status) {
    return this.htpp.post<Status>("https://6317ca93f6b281877c5d7785.mockapi.io/alarm-status", data)
  }
}

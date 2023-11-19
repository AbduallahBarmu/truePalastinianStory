import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>("../../../assets/data.json");
  }

  getEventByIdServ(id:any):Observable<any>{
    return this.http.get<any>("../../../assets/data.json/"+id)

  }

}

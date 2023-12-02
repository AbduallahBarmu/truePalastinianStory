import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject, firstValueFrom } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Events } from "src/app/interface/events";
import { Event } from "src/app/interface/event";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class EventService {
  private apiUrl = '../../../assets/data.json';
  
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>("../../../assets/data.json");
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}events/` + id);
  }


  // getEvents(): Promise<Events[]> {
  //   return firstValueFrom(this.http.get<Events[]>(`${this.apiUrl}/events`));
  // }

}

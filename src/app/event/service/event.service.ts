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
  // private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>("../../../assets/data.json");
  }

  // getEvents(): Promise<Events[]> {
  //   return firstValueFrom(this.http.get<Events[]>(`${this.apiUrl}/events`));
  // }

  // getEventById(id: number): Promise<Event> {
  //   return firstValueFrom(this.http.get<Event>(`${this.apiUrl}events/` + id));
  // }
}

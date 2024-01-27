import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
import { Events } from "../../interface/events";
import { Event } from "../../interface/event";

@Injectable({
  providedIn: "root"
})
export class EventService {
  private apiUrl = '../../../assets/data.json';
  
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }

  getEventById(id: string): Observable<Event | undefined> {
    return this.http.get<Event[]>(this.apiUrl).pipe(
      map((events: Event[]) => events.find((event: Event) => event.id === id))
    );
  }
}
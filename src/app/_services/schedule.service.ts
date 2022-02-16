import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }
  
  private getDataEvent(response: any) {
    return response.data;
  }

  addEvent(event: any): Observable<any> {
    return this.http.post<any>('http://localhost:3535/api/addEvent', event);
  }
  getEvent(): Observable<any> {
    return this.http.get<any>('http://localhost:3535/api/getEvent');
  }
}

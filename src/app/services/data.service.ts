import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Alarm} from '../models/alarm.model';
import {MACHINES} from '../models/mock-machines';
import {Machine} from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URLS to DB remote methods
  private alarmsUrl = 'api/alarms';  // URL to web api

  constructor(private http: HttpClient) { }

  getAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(this.alarmsUrl);
  }

  getMachines(): Observable<Machine[]> {
    return of(MACHINES);
  }

  getMachine(id: number): Observable<Machine> {
    return of(new Machine(id, 'prueba'));
  }
}

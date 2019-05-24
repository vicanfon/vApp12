import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Alarm} from '../models/alarm.model';
import {MACHINES} from '../models/mock-machines';
import {Machine} from '../models/machine.model';
import {Intervention} from '../models/intervention.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URLS to DB remote methods
  private alarmsUrl = 'api/alarms';  // URL to web api
  private interventionUrl = 'api/interventions';  // URL to web api

  constructor(private http: HttpClient) { }

  // Alarm methods

  getAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(this.alarmsUrl);
  }
  createAlarm(timestamp: Date, status: string, code: string, name: string, type: string, machine: string, company: string, origin: string) {
    // this.http.post(this.alarmsUrl+"/create", timestap);
  }

  // get interventions

  getInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(this.interventionUrl);
  }

  // get machines

  getMachines(): Observable<Machine[]> {
    return of(MACHINES);
  }

  getMachine(id: number): Observable<Machine> {
    return of(new Machine(id, 'prueba'));
  }

}

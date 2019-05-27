import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Alarm} from '../models/alarm.model';
import {MACHINES} from '../models/mock-machines';
import {Machine} from '../models/machine.model';
import {Intervention} from '../models/intervention.model';
import {Stats} from '../models/stats.model';
import {FrequentFailure} from '../models/stats.model';
import {AlarmType} from '../models/alarm-type.model';
import {FailureType} from '../models/failure-type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URLS to DB remote methods
  private alarmsUrl = 'api/alarms';  // URL to web api
  private interventionUrl = 'api/interventions';  // URL to web api
  private statsUrl = 'api/stats';  // URL to web api
  private failureTypesUrl = 'api/failuretypes';  // URL to web api
  private machinesUrl = 'api/machines';  // URL to web api
  private alarmTypesUrl = 'api/alarmtypes';  // URL to web api

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
  getIntervention(id:number): Observable<Intervention> {
    return of(new Intervention(id, 'haz esto', 'debes hacer esto', new Date(), 1.5, '12', 'alarm 12'));
  }

  // data structures

  getAlarmTypes(): Observable<AlarmType[]> {
    return this.http.get<AlarmType[]>(this.alarmTypesUrl);
  }
  getFailureTypes(): Observable<FailureType[]> {
    return this.http.get<FailureType[]>(this.failureTypesUrl);
  }

  // get stats

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(this.statsUrl);
  }

  // get machines

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.machinesUrl);
  }

  getMachine(id: number): Observable<Machine> {
    return of(new Machine(id, 'prueba'));
  }

}

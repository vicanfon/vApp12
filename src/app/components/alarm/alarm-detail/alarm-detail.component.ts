import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../../../models/alarm.model';
import {AuthService} from '../../../services/auth.service';
import {DataService} from '../../../services/data.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  @Input() alarm: Alarm;

  constructor(private authService: AuthService, private dataService: DataService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit() {
    if (!this.alarm){
      this.alarm= this.config.data;
    }
  }
  activateAlarm(){
    //change status
    //save alarm
    // send notification to mass
  }
  interveneAlarm() {
    // Create Intervention
    // change status
    // save alarm and Intervention
    // send notification to sis
  }

  dismissAlarm(){
    //change status
    //save alarm
    // send notification to mass
  }
  rejectAlarm(){
    //change status
    //save alarm
    // send notification to mass
  }

  getLastIntervention(alarmId: number){
    this.dataService.getIntervention(alarmId);
  }
}
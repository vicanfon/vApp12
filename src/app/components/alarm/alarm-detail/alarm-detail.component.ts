import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../../../models/alarm.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  @Input() alarm: Alarm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
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
}

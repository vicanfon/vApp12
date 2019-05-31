import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../../../models/alarm.model';
import {AuthService} from '../../../services/auth.service';
import {DataService} from '../../../services/data.service';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {InterventionManualComponent} from '../../intervention/intervention-manual/intervention-manual.component';
import {InterventionDetailComponent} from '../../intervention/intervention-detail/intervention-detail.component';
import {FailureType} from '../../../models/failure-type';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  @Input() alarm: Alarm;
  types: FailureType[];
  selectedType: FailureType;

  constructor(private authService: AuthService, private dataService: DataService, private dialogService: DialogService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit() {
    if (!this.alarm){
      this.alarm = this.config.data;
    }
    this.dataService.getFailureTypes().subscribe(failuretypes => this.types = failuretypes);
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

  saveAlarm(){
    //change status
    //save alarm
    // send notification to mass
  }

  getLastIntervention(alarmId: number){
    this.dataService.getInterventionbyAlarm(alarmId);
  }

  showIntervention(){
    const ref = this.dialogService.open(InterventionManualComponent, {
      header: 'Create Intervention',
      width: '85%',
      contentStyle: {"max-height": "90vw", "overflow": "auto"}
    });
  }

  currentIntervention(){
    const ref = this.dialogService.open(InterventionDetailComponent, {
      data: {alarmid: this.alarm.id },
      header: 'Intervention',
      width: '85%',
      contentStyle: {"max-height": "90vw", "overflow": "auto"}
    });
  }
}

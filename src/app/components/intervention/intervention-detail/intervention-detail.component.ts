import { Component, OnInit, Input } from '@angular/core';
import { Intervention } from '../../../models/intervention.model';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../../../services/data.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-intervention-detail',
  templateUrl: './intervention-detail.component.html',
  styleUrls: ['./intervention-detail.component.css']
})
export class InterventionDetailComponent implements OnInit {
  @Input() intervention: Intervention;
  fromAlarms: boolean;
  checkoutForm;

  constructor(private authService: AuthService, private dataService: DataService, private route: ActivatedRoute, private location: Location, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    if (this.config.data && !this.intervention){
      this.intervention= this.config.data;
    }
    this.getIntervention();
  }

  acceptIntervention(form: NgForm) {
    this.dataService.editIntervention(this.intervention.id, this.intervention.solution,this.intervention.timestamp,this.intervention.duration,this.config.data.alarmid, "Closed", form.value.comment);
  }

  rejectIntervention(form: NgForm) {
    this.dataService.editIntervention(this.intervention.id, this.intervention.solution,this.intervention.timestamp,this.intervention.duration,this.config.data.alarmid, "Open", form.value.comment);
  }

  editIntervention(form: NgForm) {
    this.dataService.editIntervention(this.intervention.id, this.intervention.solution,this.intervention.timestamp,this.intervention.duration,this.config.data.alarmid, this.intervention.status, form.value.comment);
  }

  getIntervention(): void {
    const alarmid = +this.config.data.alarmid;
    if (alarmid > 0) {
      this.dataService.getInterventionbyAlarm(alarmid).subscribe(intervention => this.intervention = intervention);
      this.fromAlarms = true;
    }
  }

}

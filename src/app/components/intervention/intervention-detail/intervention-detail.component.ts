import { Component, OnInit, Input } from '@angular/core';
import { Intervention } from '../../../models/intervention.model';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../../../services/data.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';

@Component({
  selector: 'app-intervention-detail',
  templateUrl: './intervention-detail.component.html',
  styleUrls: ['./intervention-detail.component.css']
})
export class InterventionDetailComponent implements OnInit {
  @Input() intervention: Intervention;
  fromAlarms: boolean;

  constructor(private authService: AuthService, private dataService: DataService, private route: ActivatedRoute, private location: Location, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    if (this.config.data && !this.intervention){
      this.intervention= this.config.data;
    }
    this.getIntervention();
  }

  acceptIntervention() {
    //save comment
    // accept Intervenion
    // send notification to mass
  }

  rejectIntervention() {
    //change status
    //save alarm
    // send notification to mass
  }

  getIntervention(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.dataService.getIntervention(id).subscribe(intervention => this.intervention = intervention);
      this.fromAlarms = true;
    }
  }


  goBack(): void {
    this.location.back();
  }

}

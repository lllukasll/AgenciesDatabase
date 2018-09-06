import { Component, OnInit, Input } from '@angular/core';
import { IAgency } from '../../agency-list/agency';

@Component({
  selector: 'app-agency-informations',
  templateUrl: './agency-informations.component.html',
  styleUrls: ['./agency-informations.component.css']
})
export class AgencyInformationsComponent implements OnInit {
  @Input() agency: IAgency;
  
  constructor() { }

  ngOnInit() {
  }

}

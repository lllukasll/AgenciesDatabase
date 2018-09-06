import { Component, OnInit, Input } from '@angular/core';
import { IAgency } from '../../agency-list/agency';

@Component({
  selector: 'app-agency-rating',
  templateUrl: './agency-rating.component.html',
  styleUrls: ['./agency-rating.component.css']
})
export class AgencyRatingComponent  {
  @Input() agency: IAgency;
}

import { Component, OnInit } from '@angular/core';
import { IAgency } from '../agency-list/agency';
import { ICategory } from '../agency-list/category';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent {
  agency: IAgency = {
    name: 'Agency XYZGAS',
    localization: 'Braws, Switzerland',
    description: 'Lorem ipsum dolor sit amet enim',
    address: "Elisabathenanlage 7, Basel",
    phone: "061 262 22 22",
    email: "agency_abcdedasd@gmail.com",  
    websiteAddress: "www.agency-abcdef.com",
    rating: 4,
    reviews: 153,
    logoUrl: 'https://zdnet1.cbsistatic.com/hub/i/2015/09/01/cb834e24-18e7-4f0a-a9bf-4c2917187d3f/83bb139aac01023dbf3e55a3d1789ad8/google-new-logo.png',
    categories: [
      {
        name: "Photography",
        id: 1
      },
      {
        name: "Movies",
        id: 2
      },  
    ]
  }
}

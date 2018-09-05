import { Component, OnInit, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { IAgency } from './agency';
import { ICategory } from './category';
import { ICapability } from 'selenium-webdriver';

import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent {
  events: string[] = [];
  opened: boolean = false;
  colors: string[] = [];
  results: number;
  showingAllCategories: boolean = true;
  errorMessage: string;

  @ViewChild('listaDoZwiniecia') listaDoZwiniecia: ElementRef;
  listCollapsed: boolean = true;

  selectedCategories: ICategory[] = [];
  shownCategories: ICategory[] = [];
  categoryList: ICategory[] = [
    {
      name: "Photography",
      id: 1
    },
    {
      name: "Movies",
      id: 2
    },
    {
      name: "Animations",
      id: 3
    },
    {
      name: "Copywriting",
      id: 4
    },
    {
      name: "asd",
      id: 5
    },
    {
      name: "asddasdas",
      id: 6
    },
  ]

  ratingMessage: any[] = [
    {
      name: "Very Bad",
    },
    {
      name: "Bad",
    },
    {
      name: "Good",
    },
    {
      name: "Very Good",
    },
    {
      name: "Perfect",
    },
  ]

  filteredAgencyList: IAgency[];
  agencyList: IAgency[];

  constructor(private agencyService: AgencyService) {
    this.generateColors();
    this.shownCategories = this.categoryList.slice(0, 5);
  }

  ngOnInit(){
    this.agencyService.GetAgencies().subscribe(
      agencies => {
        this.agencyList = agencies,
        this.filteredAgencyList = agencies
      },
      error => this.errorMessage = error
    );
  }

  sortByHighestGrades(): void {
    this.filteredAgencyList = this.filteredAgencyList.sort((a: IAgency, b: IAgency) => {
      return b.rating - a.rating ;
    })
  }

  sortByLowestGrades(): void {
    this.filteredAgencyList = this.filteredAgencyList.sort((a: IAgency, b: IAgency) => {
      return a.rating - b.rating;
    })
  }

  changeShowMoreCategoriesState(): void {
    this.showingAllCategories ? this.shownCategories = this.categoryList : this.shownCategories = this.categoryList.slice(0, 5);
    this.showingAllCategories = !this.showingAllCategories;
  }

  generateColors() {
    this.categoryList.forEach(category => {
      this.colors.push(this.generateRandomColor());
    });
  }

  generateRandomColor(): string {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onCategoryChange(filteredCategory: ICategory) {
    const index = this.selectedCategories.findIndex(x => x.id === filteredCategory.id)
    index > -1? this.selectedCategories.splice(index, 1) : this.selectedCategories.push(filteredCategory);
  }

  getFilteredList() {
    this.filteredAgencyList = this.selectedCategories.length === 0 ? this.agencyList : this.agencyList.filter(agency => this.selectedCategories.every(selectedCategory => agency.categories.some(agencyCategory => agencyCategory.id === selectedCategory.id)));
    this.results = this.filteredAgencyList.length;
    return this.filteredAgencyList;
  }

  changeSidebarState(): void {
    this.opened = !this.opened;
  }

  toggle(){
    console.log('toggle')
    this.listCollapsed = !this.listCollapsed;
    if(this.listCollapsed){
      this.listaDoZwiniecia.nativeElement.style.height = '100%';
    } else this.listaDoZwiniecia.nativeElement.style.height = '0px';
  }

}

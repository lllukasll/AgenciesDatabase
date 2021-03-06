import { Component, OnInit, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { IAgency } from './agency';
import { ICategory } from './category';
import { ICapability } from 'selenium-webdriver';

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
  agencyList: IAgency[] = [
    {
      name: "Agency ABCDEFG",
      localization: "Basel, Switzerland",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo odio, viverra quis nibh at, finibus convallis sem. Duis in tincidunt quam. Aenean rhoncus vestibulum luctus. Nam ut nunc in sem egestas commodo ut vitae nisl. Nullam et porttitor magna, nec feugiat orci. Aenean eu mauris pellentesque, feugiat arcu sit amet, aliquam magna. Mauris viverra, mi sit amet consectetur condimentum, nisl ligula accumsan eros, eu imperdiet augue tellus ut urna. Curabitur lectus justo, suscipit eu elit nec, ullamcorper sollicitudin est. Nulla facilisi. Proin nunc ipsum, finibus vitae aliquam sed, gravida in ligula. Sed vestibulum nibh ut tellus eleifend, placerat rhoncus justo rhoncus. Quisque in commodo quam. Fusce luctus fermentum diam a tempus.",
      address: "Elisabathenanlage 7, Basel",
      phone: "061 262 22 22",
      email: "agency_abcdedasd@gmail.com",
      websiteAddress: "www.agency-abcdef.com",
      rating: 5,
      reviews: 153,
      logoUrl: "https://zdnet1.cbsistatic.com/hub/i/2015/09/01/cb834e24-18e7-4f0a-a9bf-4c2917187d3f/83bb139aac01023dbf3e55a3d1789ad8/google-new-logo.png",
      categories: [this.categoryList[0], this.categoryList[3]]
    },
    {
      name: "Agency ZFDGEVB",
      localization: "Paris, France",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo odio, viverra quis nibh at, finibus convallis sem. Duis in tincidunt quam.",
      address: "Elisabathenanlage 7, Basel",
      phone: "061 262 22 22",
      email: "agency_abcdedasd@gmail.com",
      websiteAddress: "www.agency-abcdef.com",
      rating: 3,
      reviews: 53,
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX////tHCTsAAD84OHtEBrxY2bsCBXtDhntFh/sABDtEx34tLbsAAv70tP0iYzze37+8/P829z3rK795eb5vsD96+zwVFj5x8jzd3rzgIP5wsTwUVX70dL1k5bvPUPwWFzxZWnwSE3uLTT1mZvzhIbvOj/uLTP4sbPvQkfyb3P+9vbuNDr2oKL0j5G/lkIGAAAHyElEQVR4nO2dbXuiOhCGYYq8+1q1aqtotbW22///9xatPUeSwAxICOw196fdvRbJA8nMZDIJlsUwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMOU5rE/newHh+FisTzsJ9OXx0/TLaqPh+i7Z0NKHLg/BPH5r35yOI47r7P/J/EBXMe3FYRuDO7z+sV0I+9hDoGj0nYrMwDoHWemW1qVHqbvByeGJDLd1moQFZ5FAgzHpptbAbrCFBd2U9MNLk0phemYhNej6SaXpKRC2/bhvVvvsbTCs8aP9rqPz61oKyooPPfV08hI+1EiFx6Ef6qkMLU5wcSIgmJGCdh1KbRteG5dDLCKPbtGhal/bJnFWcLlydenMP2xhRElaka72K5doR28taanjt2rkHoV2mHcEr8xhd+5Uc0KU9/YihDnD/zXoroVpr+4NqIpwwBu2lO7QhuWRlTdsITb5tSv0LhJzQjUotCwxAFkG6NDodGO+geEtmhRaNDcTEFsih6Ftimn0RcFalNogxHXP3KlJKg2hX5sIoD7kFuvTaEdvjUvcBnL7dCn0A4a9xkraRDqVWg3PV8cKd6gXoU2NDsUE69xhc5zkwIjVR/VrNCGBtNTn25OG7QqtIPmkoyLKgp972dh9LJU6ikXFBHcU1MCx+o+WqDQdwHeT+voqT9+GPefovXpFUCOGDCg35DCXVhOoQf+ciVawtlq6UNOX8gj3DUjUOkK8xUGcMqLKl8WcVBKYkNO8Su3d8kKvQD2RfZhtIcyGv1XncJ+yfEUSoUJfKO/twalb825QxOL4fmvUFb4/Uj4wVkv/5lJL/FLh6Qs+aNQoZBIBHm2S77Fql45Cp4LGlNVoTXbUEdjqD12y/WFdym0rC21p4Luio1lkQu7Q6F1IEp0h/WJUVLYjnsUWt9EiVCbFiVSeq0+hWLyNfcmeh1GUjhZuE+htSWZGyepSYuSUfFjvlOhtSE5Da2T/YJ4hqBwPFkmu80uWU5y7OFMmRuR7qKzm26LZ7RFCtMoG2LX8X3fcdM/LZTRePEwv+L0dMmzEEtapHC1EWZKLmxU0UmPEqNqtKZyHp+mcPYMcjDrq2pmZpSXqDHHv0eMXY7CI6g7t6NYcVkT7Gmw16Zwjtg6tcICPwcD6X8TXmI416YQy5wpFS4KI1kpWb8n2FNPl8AH7PmqFCKRivQW1dl04SJd0XeE3VyhEPGgCu+Wl6q8IdblEQfYvWWFBNsohigv+CWuPHzroTgoVSqc40lvR7QbNppHDXWFpuitJYVPJPf2lL2ocAp6wbf1CPxEmysp/KCE0uFH9qKiTNDvjfRsl3osrRCLgX4vyybrKWOXksMrD95eUeGQlrUXExOv6EDUtICBB/6iQmoCLchedkLDb03Z/QnqiwWFhXm5zHVZD47HprGexVIs7pYU4o9E3WA0stAVe6MOX1R4oC6euYfMdbiP0eTy8QYLCslr3MKsHTdpwiOpC9wyCuMpdyVVRFj5xMevprQwHhIL73BDXcb2N5nr0DmM7eqpkPr33yFhHGYdcefGIcGWZmPoztlS3B8KM9PO+UO8wUG2ILtzMQ0el3pC0VLX4lLcAPjv2Su6NrfA54dizqVr80N8ji9VSnRsjk9IEbnC9paO5WmsBH0jvi9egq8leWKuzTeXa8NdvrQs1LF8Ke6J5ZC4WzlvigePxUpEpIhEKu0zum5hESyjHE8NC9eepEkCHhumkbougej64aXN0lUFb1FRnGl2/ZDyfAN5s2CUuwYsjyfDa8AEM6csd5nNFeWVIczbt45P6UK2p3JWTx9SLcbHk+L/Efyn3so2pJ7m2gClLe8Pg3M9TeiH53qaYKiMnVHfckZrPQ2pBbllWePJobfb7HqH3Joo2s/rrIlC6tquVN4O+Uara9O6OQhdBr4QbCv9eBtqE4nd1IYquTBilbDuDQnUQt7ysTGxgFZ3jTBh8nZtR9m3SK7z1n3CAj1/ti31u+2p1S/cb5GhzCFIs7f27LegZFF+G0O2Ce3aM1O070lqTkJ5jbOkXfueqA7jgkfYu/bdur1rhITtDQGsO7f/kFZufqsxfw/pqZS+5g5WIK98XvHAGU6lfcDToVOmf55pah8wNVl/y3kv93Z9vO7lPq6371B2m7Pd4F5u61S+cekYcm7246sP+EZobj++NSo3euqiwTMVrGP5fno/zZ4WNS9pI2pAWt/QC20PVq00fVRUSad4P82fSTts9i3GBs4W3NR69gyCs8EbVDuzoIpPq4YfGDlwt0JoUxUzZ+6Vm0fdJ9DYxy/2zUgEfWtNKNQM4H0C9RQiEilc4K1JoO5jIkxLNC1Qe0c120V/0GpuTBqZ/4kUW9HroSVnsqeuH/1sVTWcoCXn6p8PQdIRhseb1nwbwdJiUk0fxi4yjeud9Xtxy75RcqmZqVGgqtbGPMegSpJRhRu0xIaKjE70VbIC2vu9p5T+7m7f6MOuscx2Jaavd2n04bV1FkYi+qrcV0P46saHHlfPFVZdzqs3zw0sYdfEeAk5NaV5dPAbllFCF5nK6+R3SGdRDyDAxuTlW7JRG/07jZf93IHYDVX21T9/D9ibd/t7wBfG0SBRf9N5EHVs6BXx+fNd7uVwOFwO/rXvcjMMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzTGXxaidiHpPPEhAAAAAElFTkSuQmCC",
      categories: [this.categoryList[1], this.categoryList[3]]

    }
  ]

  constructor() {
    this.generateColors();
    this.results = this.agencyList.length;
    this.shownCategories = this.categoryList.slice(0, 5);
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

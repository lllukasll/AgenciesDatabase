import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges{
  @Input() rating: number;
  starWidth: number;
  
  ngOnInit(){
    this.starWidth = this.rating * 75 / 5;
  }

  ngOnChanges(){

  }
}

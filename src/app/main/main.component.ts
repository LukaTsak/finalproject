import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.apiService.getData().subscribe((res: any) => {
      this.dishesArray = res;
      });
    } else {
      console.error('One or more filter parameters are undefined.');
    }
  }

  dishesArray : any = []

  nutsPreference!: boolean ;
  vegPreference!: boolean
  category! : string ;
    if (this.nutsPreference !== undefined && this.vegPreference !== undefined && this.category !== undefined && this.spiceLevel !== undefined) {
      this.apiService.getFilteredData(this.nutsPreference, this.vegPreference, this.category, this.spiceLevel).subscribe((res: any) => {

  filterData() {
    this.apiService.getFilteredData(this.nutsPreference,this.vegPreference,this.category,this.spiceLevel).subscribe((res: any) => {
    this.dishesArray = res;
    });
    console.log(this.nutsPreference,this.vegPreference,this.category,this.spiceLevel);
  }





}

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
export class MainComponent implements OnInit {
  title = 'finalproject';
  data: any[] = [];
  searchTerm: string = '';

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    console.log('hi')
    this.apiService.getData().subscribe((response: any) => {
      console.log(response);
      console.log('hi')
    });
  }
}
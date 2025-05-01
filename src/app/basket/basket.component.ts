import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket',
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  constructor(private https: ApiService) {}

  basketArr = [];
  allCardsArr = [];
  favouritesArr = [];

  string? : string

  ngOnInit() {
    this.https.getBasket().subscribe((res: any) => {
      console.log(res);
      this.basketArr = res;
      console.log(this.basketArr);

      this.https.getData().subscribe((res: any) => {
      this.allCardsArr = res;

      // console.log("baskets:", this.basketArr);
      // console.log('all:', this.allCardsArr);
      // console.log('favourites:', this.favouritesArr);

      // for(let el of this.basketArr){
      //   let newarr: any[] = el
      //   let another: any[] = el
      //   for (let el2 of newarr) {
      //     another.push(el2.product);
      //   }
      //   console.log('newarr: ', another);
      // }
      })
    });
  }



}

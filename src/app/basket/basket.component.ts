import { Component, Input, TrackByFunction } from '@angular/core';
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
  trackByProductId: TrackByFunction<any> = (index, item) => item.product.id;
  constructor(private https: ApiService) {}

  basketArr: { product: { price: number }; quantity: number }[] = [];
  ngOnInit() {
    this.https.getBasket().subscribe((res: any) => {
      console.log(res);
      this.basketArr = res;
      console.log(this.basketArr);

      this.loadBasket();

      this.https.getData().subscribe((res: any) => {
        this.allCardsArr = res;
      });
    });
  }

  loadBasket() {
    this.totalPrice = 0;
    this.https.getBasket().subscribe((res: any) => {
      this.basketArr = res;

      for (let item of this.basketArr) {
        this.totalPrice += item.product.price * item.quantity;
      }

      this.https.getData().subscribe((res: any) => {
        this.allCardsArr = res;
      });
    });
  }

  @Input() array: any;

  allCardsArr = [];
  favouritesArr = [];
  indeX?: Number;

  string?: string;

  totalPrice: number = 0;

  deleteFromBasket(id: number) {
    this.https.deleteFromBaskett(id).subscribe((res: any) => {
      console.log(res);
      this.https.getBasket().subscribe((res: any) => {
        console.log(res);
        this.basketArr = res;
      });
    });
  }

  updateInBasket(id: number, quant: number) {
    let obj = {
      quantity: quant,
      price: 1,
      productId: id,
    };
    this.https.updateInBasket(obj).subscribe((res: any) => {
      console.log(res);
      this.https.getBasket().subscribe((res: any) => {
        console.log(res);
        this.basketArr = res;
      });
    });
    this.https.getBasket().subscribe((res: any) => {
      console.log('Basket response:', res);
    });
    this.loadBasket();
  }
}

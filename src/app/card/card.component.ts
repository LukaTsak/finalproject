import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private https: ApiService) {}
  obj: any;

  @Input() el: any;

  @Output() addToBasket = new EventEmitter<any>();

  // addBasket(){
  //   this.addToBasket.emit(this.el.id);
  //   console.log(this.el.id);
  //   let quant = Number(prompt("Quantity?"))
  //   this.obj = {
  //     "quantity": quant,
  //     "price": this.el.price,
  //     "productId": this.el.id
  //   };
  //   console.log(this.obj);
  //   this.https.postData(this.obj).subscribe((res: any) => {
  //   console.log(res);})
  //   this.https.getBasket().subscribe((res: any) => {console.log(res)})
  // }

  addBasket() {
    this.addToBasket.emit(this.el.id);

    const quant = Number(prompt('Quantity?'));
    if (!quant || quant <= 0) {
      alert('Invalid quantity.');
      return;
    }

    const obj = {
      quantity: quant,
      price: this.el.price,
      productId: this.el.id,
    };

    this.https.postData(obj).subscribe({
      next: () => {
        this.https.getBasket().subscribe((res: any) => {
          console.log('Updated Basket:', res);
        });
      },
      error: (err) => {
        console.error('Error adding to basket:', err);
      },
    });
  }
}

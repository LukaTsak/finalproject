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
  basketArr: { id: number; [key: string]: any }[] = [];

  @Input() el: any;

  @Output() addToBasket = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<{ id: number; quantity: number }>();

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

  deleteFromBasket() {
    this.delete.emit(this.el.product.id);
    console.log(this.el.product.id);
  }
  updateInBasket() {
    let quant = Number(prompt('Quantity?'));
    this.update.emit({ id: this.el.product.id, quantity: quant });
    console.log(this.el.product.id,quant); ;
 }
}

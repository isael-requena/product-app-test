import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent  implements OnInit {
  
  @Input() productTitle: string | undefined = '';
  @Input() productPrice: number | undefined = 0;
  @Input() product: ProductInterface | undefined;
  @Output() totalPriceEmit: EventEmitter<number> = new EventEmitter<number>();
  @Output() productEmit: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  public sumaPrice: number = 0;

  constructor() { }

  ngOnInit() {}

  public emitTotalPrice() {//Emit price
    //Voy sumando el precio
    if (this.productPrice) this.sumaPrice = this.sumaPrice + this.productPrice;

    //Emit output total price
    this.totalPriceEmit.emit(this.sumaPrice);

    //Emit output Product Cart
    this.productEmit.emit(this.product);

/*     //Save into local storage the product cart list
    //JSON parse a string
    const productList: ProductInterface[] =  JSON.parse(localStorage.getItem('cartProductList') || '')
    if (this.product) productList.push(this.product);
    localStorage.setItem('cartProductList', JSON.stringify(productList)) */
  }

}

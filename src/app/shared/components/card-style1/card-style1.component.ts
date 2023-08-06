import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-style1',
  templateUrl: './card-style1.component.html',
  styleUrls: ['./card-style1.component.scss'],
})
export class CardStyle1Component  implements OnInit {

  @Input() showLittle: boolean = false;
  @Input() product: ProductInterface | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goToDetails() {
    this.router.navigate(['product-details', `${this.product?.id}`])
  }

}

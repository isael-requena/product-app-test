import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public products: ProductInterface[] | null = [];

  constructor(
    private productService: ProductsService,
  ) {
  }

  async ngOnInit() {
    this.products = await this.productService.GetProducts()
    console.log('this.products', this.products)
  }

}

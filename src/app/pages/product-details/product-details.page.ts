import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../../interfaces/product.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit, OnDestroy {

  public productId: number | undefined;
  private sub: Subscription | undefined;
  public product: ProductInterface | undefined;
  public totalPriceSuma: number = 0;
  public productCartList: ProductInterface[] = [];
  public showPopover: boolean = false;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {

   }

  async ngOnInit() {
    await this.initPage()
  }

 //Load init data
 private async initPage(): Promise<void> {

  //Get route params
  this.sub = this.route.params.subscribe(params => {
    this.productId = +params['id']; // (+) converts string 'id' to a number
    console.log('params', params)
    console.log('productID', this.productId)
  });

  //Get All products
  const products: ProductInterface[] | null = await this.productService.GetProducts() 
  
  //Get product by the route param id
  this.product = products?.find(product => product.id === this.productId);
  console.log('product', this.product)
 }

 ngOnDestroy() {
   this.sub?.unsubscribe();
 }

 public goToBack(): void {
  this.navCtrl.back();
 }

 public eventSumaPrice(price: number) {
  this.totalPriceSuma = price;
  console.log('totalPriceSuma', this.totalPriceSuma)
 }

 public eventProductList(product: ProductInterface) {
  this.productCartList.push(product)
  console.log('productCartlist', this.productCartList)
  this.showPopover = true
 }

 public showPopoverFn() {
    this.showPopover = true;
 }

}

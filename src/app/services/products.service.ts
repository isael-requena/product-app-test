import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
  }

  async GetProducts(): Promise<ProductInterface[] | null> {
    try {
      const result: AxiosResponse<ProductInterface[]> = await axios.get<ProductInterface[]>('https://fakestoreapi.com/products');
      return result.data
    } catch (error) {
      console.error(error)
      return Promise.resolve(null);
    }
  }
}

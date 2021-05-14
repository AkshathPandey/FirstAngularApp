import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[
    {
      productTitle:"iphone12",
      price:"120000",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_4j3ChMTtmwlC3SjqBPQOqZsDG2KD3WrhQ&usqp=CAU"
    },

    {
      productTitle:"iphone11",
      price:"80000",
      productImage:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg"
    },

    {
      productTitle:"iphone X",
      price:"100000",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/618ZI2Xyw%2BL._AC_SL1500_.jpg"
    },

    {
      productTitle:"iphone10",
      price:"70000",
      productImage:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg"
    },

    {
      productTitle:"iphone9",
      price:"60000",
      productImage:"https://cdn.pricebaba.com/prod/images/product/mobile/59168/apple-iphone-9-raw-813353.jpg"
    },

    {
      productTitle:"iphone8",
      price:"50000",
      productImage:"https://assets.swappie.com/iPhone-8-Plus-256GB-Gold-1-1.png"
    }
  ]

}

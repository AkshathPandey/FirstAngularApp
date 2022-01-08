import { Injectable } from '@angular/core';
import { Mobile } from './model/mobile.model';

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {

  constructor() { }

  mobiles:Mobile[]=[
    {
      mobileName:"iphone12",
      price:"120000",
      mobileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_4j3ChMTtmwlC3SjqBPQOqZsDG2KD3WrhQ&usqp=CAU"
    },
  
    {
      mobileName:"iphone11",
      price:"80000",
      mobileImage:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg"
    },
  
    {
      mobileName:"iphone X",
      price:"100000",
      mobileImage:"https://images-na.ssl-images-amazon.com/images/I/618ZI2Xyw%2BL._AC_SL1500_.jpg"
    },
  
    {
      mobileName:"iphone10",
      price:"70000",
      mobileImage:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg"
    },
  
    {
      mobileName:"iphone9",
      price:"60000",
      mobileImage:"https://cdn.pricebaba.com/prod/images/product/mobile/59168/apple-iphone-9-raw-813353.jpg"
    },
  
    {
      mobileName:"iphone8",
      price:"50000",
      mobileImage:"https://assets.swappie.com/iPhone-8-Plus-256GB-Gold-1-1.png"
    }
  ];


  getMobilesData():Mobile[]{
    return this.mobiles;
  }
}

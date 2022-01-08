import { Component, OnInit } from '@angular/core';
import { Bike } from '../model/bike.model';
import {BikeserviceService} from '../bikeservice.service'
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

bikes:Bike[]=[];

constructor(private biserObj:BikeserviceService){}
ngOnInit(){
  this.bikes=this.biserObj.getBikesData();
}

}

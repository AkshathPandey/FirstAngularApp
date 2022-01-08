import { Component, OnInit } from '@angular/core';
import { Mobile } from '../model/mobile.model';
import {MobileserviceService} from '../mobileservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{
mobiles:Mobile[]=[];
constructor(private mobserObj:MobileserviceService){}
ngOnInit(){
  this.mobiles=this.mobserObj.getMobilesData();
}

}

import { Component, OnInit } from '@angular/core';
import { Television } from '../model/television.model';
import {TelevisionserviceService} from '../televisionservice.service'
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{

  televisions:Television[]=[];
  constructor(private telserObj:TelevisionserviceService){}
  ngOnInit(){
    this.televisions=this.telserObj.getTelevisionData();
  }

}

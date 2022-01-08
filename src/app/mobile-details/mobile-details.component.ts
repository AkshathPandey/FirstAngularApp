import { Component, Input } from '@angular/core';
import { Mobile } from '../model/mobile.model';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent  {
@Input() mobileObj:Mobile;
  

}

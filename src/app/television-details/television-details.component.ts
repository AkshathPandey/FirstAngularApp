import { Component,Input } from '@angular/core';
import { Television } from '../model/television.model';

@Component({
  selector: 'app-television-details',
  templateUrl: './television-details.component.html',
  styleUrls: ['./television-details.component.css']
})
export class TelevisionDetailsComponent {

@Input() televisionObj:Television;  

}

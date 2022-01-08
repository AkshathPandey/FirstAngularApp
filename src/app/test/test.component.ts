import { Component, OnInit } from '@angular/core';
import { RemotedataService } from '../remotedata.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  users:any;
  ppostData:any;
  constructor(private remdataObj:RemotedataService) { }


  ngOnInit(): void {
    this.remdataObj.getUsersData().subscribe(
    data=>{
      this.users=data;

    },
    err=>{
      console.log("erroe generated is",err);
    }
    );
  }

}

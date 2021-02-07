import { Component, OnInit } from '@angular/core';
import {AddfieldsService} from '../addfields.service';
import {SearchnamePipe} from '../filter/searchname.pipe';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   dataList;
   userDetails={firstname:"",lastname:"",email:""};
   searchvalue:String;
  // searchByLastName:String;
  // searchByEmailName:String;
  constructor(private service:AddfieldsService) { }
   
  ngOnInit(): void {
     this.service.getFormsData().subscribe(data=>{
      this.dataList=data;
       console.log(data);
     });

  }
  getDetailsUser(id){
    for(let i=0;i<this.dataList.length;i++){
      if(this.dataList[i]._id==id){
        this.userDetails.firstname=this.dataList[i].firstname;
        this.userDetails.lastname=this.dataList[i].lastname;
        this.userDetails.email=this.dataList[i].email;
      }
    }
    console.log(this.userDetails);
  }
}

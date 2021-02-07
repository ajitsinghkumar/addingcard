import { Component, OnInit } from '@angular/core';
import {AddfieldsService} from '../addfields.service';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor(private service:AddfieldsService,private route:Router) { }

  ngOnInit(): void {
  }
  submitform(f){
   // console.log(f.value);
   this.service.addFormsData(f.value).subscribe(data=>{
    if(data){
      this.route.navigate(['/']);
  }
   });
    
  }

}

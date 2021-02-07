import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms';
import {AddfieldsService} from '../addfields.service';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  

  reactiveform:FormGroup;
  constructor(private formbuilder:FormBuilder,private service:AddfieldsService,private route:Router) {
    // this.reactiveform=formbuilder.group({
    //   firstname: new FormControl(""),
    //   lastname: new FormControl(),
    //   email: new FormControl(),
    //   });
      this.reactiveform=formbuilder.group({
        email:["",
        [Validators.required, Validators.email] ],
         firstname:["",Validators.required],
         lastname:["",Validators.required],

   });
  }
  
  ngOnInit(): void {

  }
  
  getreactiveform(){
    console.log(this.reactiveform);
    console.log(this.reactiveform.value);
    console.log(this.reactiveform.value.email);
    this.service.addFormsData(this.reactiveform.value).subscribe(data=>{
      if(data){
          this.route.navigate(['/']);
      }
    });

  }


}

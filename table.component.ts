import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
   constructor (private r:Router, private http:HttpClient ){ 
}
  title = 'CustomTable';
headers = ["id", "name", "marks","delete"];
rows:any;
// rows = [
//     {id:1,name:'srinu',marks:79},
//     {id:2,name:'surya',marks:99},
//     {id:3,name:'kiran',marks:90},
//     {id:4,name:'ram',marks:100}
//   ]
ngOnInit(): void{
  this.http.get("http://localhost:3000/student")
  .subscribe(
    (data)=>{
      console.log(data)
      this.rows=data;
    }
  )
}
  navigate(){
    this.r.navigate(['/add'])
  }
  edit(){
    this.r.navigate(['/edit'])
  }
}

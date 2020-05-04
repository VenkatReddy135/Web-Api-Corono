import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  public Employees=[];
 
  constructor(private wb:WebserviceService) { }

  ngOnInit(): void {
    this.wb.getData().subscribe(data=>{
        data.forEach(ele=>{
          var x =  ele.currencies;
          x.forEach(ele=>{
            this.Employees.push(ele.name);
          })
        })
     })
  
    }
}

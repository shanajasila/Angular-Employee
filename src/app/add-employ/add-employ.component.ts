import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {
  name=""
  designation=""
  salary=""
  phonenumber=""
  companyname=""
  readValues=()=>
  {
    let data= {"name":this.name,
    "designation":this.designation,
    "salary":this.salary,
    "phonenumber":this.phonenumber,
    "companyname":this.companyname
    }
    console.log(data)
  }
}

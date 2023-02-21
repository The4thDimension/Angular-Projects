import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title = 'Project_4_table';

  numId: number = 1;
  people: Person[] = [];
  name: string;
  address: string;
  emailId: string;

  // public ngOnInit(){
  //   this.name = "";
  //   this.numId = 1;
  //   this.address = "";
  //   this.emailId = "";
  //   console.log("Initialised");
    
  // }

  pushData(){
    const newPerson: Person = {
      id: this.numId,
      name: this.name,
      address: this.address,
      emailId: this.emailId
    };
    // console.log(this.numId);
    

    this.people.push(newPerson);
    this.name = "";
    this.address = "";
    this.emailId = "";
    this.numId = this.numId + 1;
  }

  deleteVal(id){
    console.log(id);
    
    this.people = this.people.filter(val => val.id !== id);
  }
}





import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_3_formSubmission';

  varName: string;
  newVarName: string;

  varAddr: string;
  newVarAddr: string;

  imgUrl: string;
  otherUrl: string;
  isImg: boolean = false;
  isUrl: boolean = false;
  isBkg: boolean = false;

  putName(){
    this.newVarName = this.varName;
  }

  putAddr(){
    this.newVarAddr = this.varAddr;
    
  }

  onInit(){
    this.newVarAddr = ""
    this.newVarName = ""
  }

  setIsImg(){
    // console.log(this.imgUrl);
    
    this.isImg = true;
  }

  setIsUrl(){
    this.isUrl = true;
  }

}

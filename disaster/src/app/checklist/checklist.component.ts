import { Component, OnInit } from '@angular/core';

// <--Add these modules here-->
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
// <--Add end-->

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  temp = {};
  myConcat = [];
  plainCheck2 = [];
  plainCheck = [];
  onlyAdd = [];
  TFaddBag = false;
  plainAdds = [];
  plainAdds2=[];
  returnbag:any;
  myarray = [];
  myjson = {};
  newBag={item: '', weight:Number};
  testbag= {"myBag":[]};
  indexes=[];
  indexes2 = [];
  funcWholeBag = {"myBag":[]};
  wholeBag = {
    "myBag": [
      {
        "item": "Cellphone and charger",
        "weight": 1
      },
      {
        "item": "Computer",
        "weight": 5000
      },
      {
        "item": "Driver's License",
        "weight": 4000
      }
    ]
  }

  kekBag = 
  {
    "myBag": [
      {
        "item": "Cellphone and charger",
        "weight": 2
      },
      {
        "item": "Computer",
        "weight": 7
      },
      {
        "item": "Driver's License",
        "weight": 0
      },
      {
        "item": "Deed to your house",
        "weight": 0
      },
      {
        "item": "Proof of Insurance",
        "weight": 0
      },
      {
        "item": "Medical Records",
        "weight": 0
      },
      {
        "item": "Passports",
        "weight": 0
      },
      {
        "item": "Social Security Cards",
        "weight": 0
      },
      {
        "item": "A list of personal contacts",
        "weight": 0
      },
      {
        "item": "Pet",
        "weight": 25
      },
      {
        "item": "Cash",
        "weight": 0
      },
      {
        "item": "Keys",
        "weight": 0
      },
    
    ]
  };
    constructor(private _httpService: HttpService, private _router: Router) { }

    ngOnInit() {
    }
    addBag() {
      this.temp = Object.assign({},this.newBag);
      this.plainAdds2.push(this.temp);
    }

    sendCustom() {
      this.plainCheck2 = [];
      console.log('sendCustom() this is the nulltruefalse bag',this.indexes2);
      for (var i=0; i<this.indexes2.length; i++){
        if (this.indexes2[i]==1){
          this.plainCheck2.push(this.plainAdds2[i]);
          console.log(this.plainAdds2[i]);
        }
      }
      this.sending();
    
    }

    sending() {

      this.myConcat = this.plainCheck.concat(this.plainCheck2);
      this.myjson = {"myBag": this.myConcat};
      console.log('myjson:', this.myjson);
      var tempObservable = this._httpService.SerSendWholeBag(this.myjson);
      tempObservable.subscribe((data:any)=>{
        console.log('we got this from backend:', data);
        this.returnbag = data;
      })
    }
    sendWholeBag() {
      this.plainCheck = [];
      console.log('this is the nulltruefalse bag',this.indexes);
      for (var i=0; i<this.indexes.length; i++){
        if (this.indexes[i]==1){
          this.plainCheck.push(this.kekBag.myBag[i]);
          console.log(this.kekBag.myBag[i]);
        }
      }
      this.sending();
    }
}
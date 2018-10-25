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
returnbag:any;
myarray = [];
myjson = {};
newBag:any;
testbag= {"myBag":[]};
indexes=[];
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
      "weight": 1
    },
    {
      "item": "Computer",
      "weight": 5000
    },
    {
      "item": "Driver's License",
      "weight": 4000
    },
    {
      "item": "Deed to your house",
      "weight": 4000
    },
    {
      "item": "Proof of Insurance",
      "weight": 4000
    },
    {
      "item": "Medical Records",
      "weight": 4000
    },
    {
      "item": "Passports",
      "weight": 1
    },
    {
      "item": "Social Security Cards",
      "weight": 5000
    },
    {
      "item": "A list of personal contacts",
      "weight": 4000
    },
    {
      "item": "Pet",
      "weight": 4000
    },
    {
      "item": "Cash",
      "weight": 4000
    },
    {
      "item": "Keys",
      "weight": 4000
    },
    {
      "item": "Original Paintings",
      "weight": 4000
    },
    {
      "item": "Non-perishable, ready-to-eat food",
      "weight": 4000
    },
    {
      "item": "Sanitary Devices",
      "weight": 4000
    },
    {
      "item": "Water",
      "weight": 4000
    },
    {
      "item": "Change of clothing",
      "weight": 4000
    },
    {
      "item": "Coats/Jackets",
      "weight": 4000
    },
    {
      "item": "Toiletries",
      "weight": 4000
    },
    {
      "item": "Flashlight",
      "weight": 4000
    },
    {
      "item": "Shoes/Boots",
      "weight": 4000
    },
    {
      "item": "Sleeping Bag",
      "weight": 4000
    },
  ]
};
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newBag = {item: '', weight: ''};
    // <--This is where the form data is picked up. MAKE SURE THEY MATCH YOUR MODELS!!!!-->
  }
  addBag() {
    this._httpService.createBag(this.newBag).subscribe(data => {
      console.log('API RESPONSE BABY!', data);
      console.log(data);
      this.newBag = {item: '', weight: ''};
      this._router.navigate(['/disaster/bag']); // <--send them back to the main page-->

    });
  }
  sendWholeBag() {
    console.log('this is the nulltruefalse bag',this.indexes);
    for (var i=0; i<this.indexes.length; i++){
      if (this.indexes[i]==true){
        this.myarray.push(this.kekBag.myBag[i]);
        console.log(this.kekBag.myBag[i]);
      }
    }
    this.myjson = {"myBag": this.myarray};
    console.log('myjson:', this.myjson);
    var tempObservable = this._httpService.SerSendWholeBag(this.myjson);
    tempObservable.subscribe((data:any)=>{
      // this.wholeBag = data;
      console.log('we got this from backend:', data);
      this.returnbag = data;
      // if(!data.errors){
      //   this._router.navigate(['/disaster/checklist']);
      // }
    })
  }
  testfunction(){
    console.log('testbag:', this.testbag);
  }
  // trackByIdx(index: number, obj: any): any {
  //   return index;
  // }
}

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
      // {
      //   "item": "Original Paintings",
      //   "weight": 200
      // },
      // {
      //   "item": "Non-perishable, ready-to-eat food",
      //   "weight": 50
      // },
      // {
      //   "item": "Sanitary Devices",
      //   "weight": 15
      // },
      // {
      //   "item": "Water",
      //   "weight": 10
      // },
      // {
      //   "item": "Change of clothing",
      //   "weight": 14
      // },
      // {
      //   "item": "Coats/Jackets",
      //   "weight": 10
      // },
      // {
      //   "item": "Toiletries",
      //   "weight": 5
      // },
      // {
      //   "item": "Flashlight",
      //   "weight": 2
      // },
      // {
      //   "item": "Shoes/Boots",
      //   "weight": 7
      // },
      // {
      //   "item": "Sleeping Bag",
      //   "weight": 5
      // },
    ]
  };
    constructor(private _httpService: HttpService, private _router: Router) { }

    ngOnInit() {
      // this.newBag = {item: '', weight: ''};
      // <--This is where the form data is picked up. MAKE SURE THEY MATCH YOUR MODELS!!!!-->
    }
    addBag() {
      this.temp = Object.assign({},this.newBag);
      this.plainAdds2.push(this.temp);
      // console.log('newBag before', this.newBag);

      // for (var i=0; i<this.plainAdds.length;i++){
      //   this.plainAdds2.push(this.plainAdds[i]);
      // }
      // this.plainAdds2 = Object.assign(this.newBag);
      // console.log('plainAdds2 before', this.plainAdds2);
      // this.plainAdds.push(this.newBag);
      



      // this.plainAdds2 = this.plainAdds;
      // console.log('plainAdds:',this.plainAdds);
      // this.sending();


      // this._httpService.createBag(this.newBag).subscribe(data => {
      //   console.log('API RESPONSE BABY!', data);
      //   console.log(data);
      //   this.newBag = {item: '', weight: ''};
      //   this._router.navigate(['/disaster/bag']); // <--send them back to the main page-->

      // });
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

      // this.myarray = this.plainCheck;
      // for (var i = 0; i<this.plainAdds.length;i++){
      //   this.myarray.push(this.plainAdds[i]);
      // }
      // console.log('after concat', this.myarray);
      // console.log('joint array', this.myarray);
      this.myjson = {"myBag": this.myConcat};
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
    // testfunction(){
    //   console.log('testbag:', this.testbag);
    // }
    // trackByIdx(index: number, obj: any): any {
    //   return index;
    // }

}
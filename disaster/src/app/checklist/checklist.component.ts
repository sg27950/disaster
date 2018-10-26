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
  plainAdds2 = [];
  returnbag: any;
  myarray = [];
  myjson = {};
  newBag = {item: '', weight: Number};
  testbag = {'myBag': []};
  indexes = [];
  indexes2 = [];
  funcWholeBag = {'myBag': []};
  wholeBag = {
    'myBag': [
      {
        'item': 'Cellphone and charger',
        'weight': 1
      },
      {
        'item': 'Computer',
        'weight': 5000
      },
      {
        'item': 'Driver\'s License',
        'weight': 4000
      }
    ]
  };

  kekBag =
  {
    'myBag': [
      {
        'item': 'Cellphone and charger',
        'weight': 1
      },
      {
        'item': 'Computer',
        'weight': 5000
      },
      {
        'item': 'Driver\'s License',
        'weight': 4000
      },
      {
        'item': 'Deed to your house',
        'weight': 4000
      },
      {
        'item': 'Proof of Insurance',
        'weight': 4000
      },
      {
        'item': 'Medical Records',
        'weight': 4000
      },
      {
        'item': 'Passports',
        'weight': 1
      },
      {
        'item': 'Social Security Cards',
        'weight': 5000
      },
      {
        'item': 'A list of personal contacts',
        'weight': 4000
      },
      {
        'item': 'Pet',
        'weight': 4000
      },
      {
        'item': 'Cash',
        'weight': 4000
      },
      {
        'item': 'Keys',
        'weight': 4000
      },
      {
        'item': 'Original Paintings',
        'weight': 4000
      },
      {
        'item': 'Non-perishable, ready-to-eat food',
        'weight': 4000
      },
      {
        'item': 'Sanitary Devices',
        'weight': 4000
      },
      {
        'item': 'Water',
        'weight': 4000
      },
      {
        'item': 'Change of clothing',
        'weight': 4000
      },
      {
        'item': 'Coats/Jackets',
        'weight': 4000
      },
      {
        'item': 'Toiletries',
        'weight': 4000
      },
      {
        'item': 'Flashlight',
        'weight': 4000
      },
      {
        'item': 'Shoes/Boots',
        'weight': 4000
      },
      {
        'item': 'Sleeping Bag',
        'weight': 4000
      },
    ]
  };
    constructor(private _httpService: HttpService, private _router: Router) { }

    ngOnInit() {
      // this.newBag = {item: '', weight: ''};
      // <--This is where the form data is picked up. MAKE SURE THEY MATCH YOUR MODELS!!!!-->
    }
    addBag() {
<<<<<<< HEAD
      // this.temp = Object.assign({},this.newBag);
      // this.plainAdds2.push(this.temp);

      this.plainAdds2.push(Object.assign({},this.newBag));




=======
      this.temp = Object.assign({}, this.newBag);
      this.plainAdds2.push(this.temp);
>>>>>>> 76d089585b684cc7b49e1515d0565d5b6b3da399
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
      console.log('sendCustom() this is the nulltruefalse bag', this.indexes2);
      for (let i = 0; i < this.indexes2.length; i ++) {
        if (this.indexes2[i] === 1) {
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
      this.myjson = {'myBag': this.myConcat};
      console.log('myjson:', this.myjson);
      const tempObservable = this._httpService.SerSendWholeBag(this.myjson);
      tempObservable.subscribe((data: any) => {
        // this.wholeBag = data;
        console.log('we got this from backend:', data);
        this.returnbag = data;
        // if(!data.errors){
        //   this._router.navigate(['/disaster/checklist']);
        // }
      });
    }
    sendWholeBag() {
      this.plainCheck = [];
      console.log('this is the nulltruefalse bag', this.indexes);
      for (let i = 0; i < this.indexes.length; i++) {
        if (this.indexes[i] === 1) {
          this.plainCheck.push(this.kekBag.myBag[i]);
          console.log(this.kekBag.myBag[i]);
        }
      }
      this.sending();
    }

    deleteItem(id:any) {
      console.log('id', id);
      var observable = this._httpService.SerDelete(id);
      observable.subscribe((data:any) => {
        console.log('Deleted Product', data);
        // if(!data.errors){
        //   this._router.navigate(['/checklist']);
        // }
      })
    }
    // testfunction(){
    //   console.log('testbag:', this.testbag);
    // }
    // trackByIdx(index: number, obj: any): any {
    //   return index;
    // }

}

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
newBag:any;
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
}

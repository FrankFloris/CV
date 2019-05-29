import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  selected: boolean[] = [false, false, false, false, false, false];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];


  constructor(
    private router: Router,
  ) { }



  ngOnInit() {
  }

  doeIets(x){
    if(!this.selected[x]) {
      this.selected[x] = true;
    } else {
      this.selected[x] = false;
    }
  }

  yesMouseOver(x) {
    if(!this.mousedOver){
      this.mousedOver[x] = true;
    } else {
      this.mousedOver[x] = false;
    }
  }

  navigate() {
    console.log("test");
    this.router.navigate(['/cv']);
  }
}

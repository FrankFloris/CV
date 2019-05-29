import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InteractieveCVFrank';

  constructor(
    private router: Router,
  ) { }



  // naarCV() {
  //   this.router.navigate(['/cv'])
  // }
  //
  // naarGames() {
  //   this.router.navigate(['/games'])
  // }
  //
  // naarFrank() {
  //   this.router.navigate(['/frank'])
  // }
  naarCV() {
    this.router.navigate(['/cv'])
  }
}

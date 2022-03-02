import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overwatch',
  templateUrl: './overwatch.component.html',
  styleUrls: ['./overwatch.component.scss']
})
export class OverwatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // document.body.style.backgroundImage = "url('https://www.owfire.com/images/maps/kings-row-1.jpg')";
    console.log("I ran");
    
  }

}

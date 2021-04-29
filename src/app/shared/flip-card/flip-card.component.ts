import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;
  faArrowAltCircleRight = faArrowAltCircleRight;
  faArrowCircleLeft = faArrowCircleLeft;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleProperty = !this.toggleProperty;
  }

}

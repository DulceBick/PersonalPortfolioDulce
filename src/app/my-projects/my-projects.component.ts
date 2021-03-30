import { Component, OnInit } from '@angular/core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  faPlusSquare=faExchangeAlt;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit(): void {
    this.style = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
 
 }


this.params = {
      particles: {
          number: {
              value: 100,
          },
          color: {
              value: ["#000000", "#EB119F","#FFFFFF"]
          },
          shape: {
              type: 'triangle',
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
  }
};

     }

}

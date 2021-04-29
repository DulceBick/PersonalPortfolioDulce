import {  Component, OnInit } from '@angular/core';

@Component({
    selector: 'flip-card-front',
    template: `
    <div class="flip-card-front">
     <ng-content></ng-content>
   </div>
   `,
   styleUrls:['flip-card.component.scss']
})

export class FlipCardFrontComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
import { Component, OnInit } from '@angular/core';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faBomb } from '@fortawesome/free-solid-svg-icons'; 
import { faBookDead } from '@fortawesome/free-solid-svg-icons'; 
import { faDragon } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  iconMenu = faGem;
  
  home:Boolean;
  aboutMe:Boolean;
  project:Boolean;
  brand:Boolean;
  hobbie:Boolean;
 
  constructor() { 
    this.home=true;
    this.aboutMe=false;
    this.project=false;
    this.brand=false;
    this.hobbie=false;

  }

  ngOnInit(): void {
    
  }
  
  homeButton(){
    this.iconMenu = faGem;
  }

  aboutMeButton(){
    this.iconMenu = faCrown;
  }
  myProjectsButton(){
    this.iconMenu = faBomb;
  }
  myBrandButton(){
    this.iconMenu = faBookDead;
  }

  myHobbiesButton(){
    this.iconMenu = faDragon;

  }

}

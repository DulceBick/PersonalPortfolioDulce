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
  text:String;
 
  constructor() { 
    this.home = true;
    this.aboutMe = false;
    this.project = false;
    this.brand = false;
    this.hobbie = false;
    this.text = "Sweet Home";

  }

  ngOnInit(): void {
    
  }
  
  homeButton(){
    this.iconMenu = faGem;
    this.text="Sweet Home";
  }

  aboutMeButton(){
    this.iconMenu = faCrown; 
    this.text="I'm a good person";
  }
  myProjectsButton(){
    this.iconMenu = faBomb;
    this.text="Yeah, let's see";
  }
  myBrandButton(){
    this.iconMenu = faBookDead;
    this.text="Follow me ";
  }

  myHobbiesButton(){
    this.iconMenu = faDragon;
    this.text="You need to try it";

  }

}

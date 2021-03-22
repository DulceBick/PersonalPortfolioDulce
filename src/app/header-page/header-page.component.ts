import { Component, OnInit, HostListener } from '@angular/core';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faBomb } from '@fortawesome/free-solid-svg-icons'; 
import { faBookDead } from '@fortawesome/free-solid-svg-icons'; 
import { faDragon } from '@fortawesome/free-solid-svg-icons'; 
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  iconMenu = faGem;
  iconMenuCollapse = faAlignJustify;
  
  home:Boolean;
  aboutMe:Boolean;
  project:Boolean;
  brand:Boolean;
  hobbie:Boolean;
  text:String;
  navBackground:String;
  nav_flag:Boolean;
 
  constructor() { 
    this.home = true;
    this.aboutMe = false;
    this.project = false;
    this.brand = false;
    this.hobbie = false;
    this.text = "Sweet Home";
    this.navBackground = "nav-color";
    this.nav_flag = false;
  }


  ngOnInit(): void {
    
  }
    @HostListener("document:scroll")
    scrollfunction(){
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        this.nav_flag=true;
      }else{
        this.nav_flag=false;
      }
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
    this.text="Follow me";
  }

  myHobbiesButton(){
    this.iconMenu = faDragon;
    this.text="You need to try it";

  }

}

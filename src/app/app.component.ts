import { Component } from '@angular/core';
import { SuperHeroSeriveService } from './services/super-hero-serive.service';
import { SuperHero } from './Models/SuperHero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHeroUI';
  Heroes:SuperHero[]=[]
  heroToEdit?:SuperHero


  constructor(private SuperService:SuperHeroSeriveService){}

  ngOnInit(): void {
    this.SuperService.GetSuperHeroes().subscribe(data=> this.Heroes = data)
  }
  updateHeroList(heroes:SuperHero[]){
    this.Heroes=heroes
  }

  initNewHero(){
    this.heroToEdit=new SuperHero
  }
  
  editHero(hero:SuperHero){
    this.heroToEdit=hero
  }

}

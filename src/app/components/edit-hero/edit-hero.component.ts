import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/Models/SuperHero';
import { SuperHeroSeriveService } from 'src/app/services/super-hero-serive.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?:SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  constructor(private SuperService:SuperHeroSeriveService) { }

  ngOnInit(): void {
  }

  updateHero(hero:SuperHero){
    this.SuperService.updateSuperHero(hero).subscribe((heroes: SuperHero[])=>this.heroesUpdated.emit(heroes))
  }
  deleteHero(hero:SuperHero){
    this.SuperService.deleteSuperHero(hero).subscribe((heroes:SuperHero[])=>this.heroesUpdated.emit(heroes));
  }
  createHero(hero:SuperHero){
    this.SuperService.createSuperHero(hero).subscribe((heroes:SuperHero[])=>this.heroesUpdated.emit(heroes))
  }
}

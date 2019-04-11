import { Component, OnInit } from '@angular/core';
import { HEROES } from './model/mock-heroes';
import { HeroModel } from './model/hero.model';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: HeroModel;
  heroes = HEROES;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: HeroModel) {
    this.selectedHero = hero;
  }
}

import { Component, NgModule } from '@angular/core';
import { CreateExplore } from './CreateExplore';
import { CardHoldersComponent } from "../card-holders/card-holders.component";

@Component({
  selector: 'app-explore-components',
  standalone: true,
  imports: [CardHoldersComponent],
  templateUrl: './explore-components.component.html',
  styleUrl: './explore-components.component.css'
})

export class ExploreComponentsComponent{

  artifacts: CreateExplore[];
  constructor() {
    this.artifacts = [
      {
        sno: 1,
        title: "The Oracle",
        time: "1000 BC",
        desc: "Description"
      },
      {
        sno: 2,
        title: "The Viking",
        time: "1000 BC",
        desc: "Description"
      },
      {
        sno: 3,
        title: "The Jungle",
        time: "1000 BC",
        desc: "Description"
      },
    ]
  }
}

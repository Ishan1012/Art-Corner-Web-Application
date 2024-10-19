import { Component, NgModule } from '@angular/core';
import { CreateExplore } from './CreateExplore';
import { NgFor, NgIf } from '@angular/common';
import { initialArtifacts } from '../../data/initialArtifacts';

@Component({
  selector: 'app-explore-components',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './explore-components.component.html',
  styleUrl: './explore-components.component.css'
})

export class ExploreComponentsComponent {

  artifacts: CreateExplore[];

  constructor() {
    this.artifacts = initialArtifacts;
  }

  trackByFn(item: any) {
    return item.id;
  }

  toggleLike(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].like = !this.artifacts[index].like;
    }
  }
}

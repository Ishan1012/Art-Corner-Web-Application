import { Component, Input, NgModule } from '@angular/core';
import { CreateExplore } from './CreateExplore';
import { NgFor, NgIf } from '@angular/common';
import { initialArtifacts } from '../../data/initialArtifacts';
import { EducationalResourcesComponent } from "../../educational-resources/educational-resources.component";
import { PagesContainer } from '../../PagesContainer';

@Component({
  selector: 'app-explore-components',
  standalone: true,
  imports: [NgIf, NgFor, EducationalResourcesComponent],
  templateUrl: './explore-components.component.html',
  styleUrl: './explore-components.component.css'
})

export class ExploreComponentsComponent {
  @Input() pages: PagesContainer = new PagesContainer;
  currentItem: CreateExplore = new CreateExplore();
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

  readMore(item: CreateExplore)
  {
    this.currentItem = item;
    this.pages.pageNo = 6;
    console.log(this.pages,this.currentItem);
  }

}

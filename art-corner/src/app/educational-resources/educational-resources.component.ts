import { Component, input, Input } from '@angular/core';
import { CreateExplore } from '../art-gallery/explore-components/CreateExplore';
import { NgClass, NgIf } from '@angular/common';
import { initialArtifacts } from '../data/initialArtifacts';
import { PagesContainer } from '../PagesContainer';

@Component({
  selector: 'app-educational-resources',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './educational-resources.component.html',
  styleUrl: './educational-resources.component.css'
})
export class EducationalResourcesComponent {
  @Input() currentItem: CreateExplore = new CreateExplore;
  @Input() artifacts: CreateExplore[];
  @Input() pages: PagesContainer = new PagesContainer;

  constructor(){
    this.artifacts = initialArtifacts;
  }
  
  item: CreateExplore = this.currentItem;

  toggleLike(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].like = !this.artifacts[index].like;
    }
  }
  
  moveBack(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index-1 !== -1) {
      this.currentItem = this.artifacts[index-1];
    }
  }

  moveNext(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index+1 !== this.artifacts.length) {
      this.currentItem = this.artifacts[index+1];
    }
  }

  moveHome() {
    this.pages.pageNo = 'explore';
  }
}

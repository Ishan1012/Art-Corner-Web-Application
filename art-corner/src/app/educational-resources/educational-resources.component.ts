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
  @Input() currentItem: CreateExplore = new CreateExplore();
  @Input() list: CreateExplore[] = [];
  @Input() pages: PagesContainer = new PagesContainer;
  
  item: CreateExplore = this.currentItem;

  toggleLike(item: CreateExplore) {
    const index = this.list.indexOf(item);
    if (index !== -1) {
      this.list[index].like = !this.list[index].like;
    }
  }
  
  moveBack(item: CreateExplore) {
    const index = this.list.indexOf(item);
    if (index-1 !== -1) {
      this.currentItem = this.list[index-1];
    }
  }

  moveNext(item: CreateExplore) {
    const index = this.list.indexOf(item);
    if (index+1 !== this.list.length) {
      this.currentItem = this.list[index+1];
    }
  }

  moveHome() {
    this.pages.pageNo = 'explore';
  }
}

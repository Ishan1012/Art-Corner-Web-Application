import { Component, Input } from '@angular/core';
import { initialArtifacts } from '../data/initialArtifacts';
import { CreateExplore } from '../art-gallery/explore-components/CreateExplore';
import { NgFor, NgIf } from '@angular/common';
import { PagesContainer } from '../PagesContainer';

@Component({
  selector: 'app-accessibility-features',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './accessibility-features.component.html',
  styleUrl: './accessibility-features.component.css'
})
export class AccessibilityFeaturesComponent {
  @Input() pages: PagesContainer = new PagesContainer;
  
  OpenExplore() {
    this.pages.pageNo = 2;
  }

  artifacts: CreateExplore[];

  constructor() {
    this.artifacts = initialArtifacts;
  }

  toggleLike(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].like = !this.artifacts[index].like;
    }
  }

  trackByFn(item: any): number {
    return item.id; // or any unique identifier
  }

}

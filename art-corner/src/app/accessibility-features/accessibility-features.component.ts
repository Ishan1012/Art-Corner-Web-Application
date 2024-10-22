import { Component, Input, OnInit } from '@angular/core';
import { initialArtifacts } from '../data/initialArtifacts';
import { CreateExplore } from '../art-gallery/explore-components/CreateExplore';
import { NgFor, NgIf } from '@angular/common';
import { PagesContainer } from '../PagesContainer';
import { EducationalResourcesComponent } from "../educational-resources/educational-resources.component";

@Component({
  selector: 'app-accessibility-features',
  standalone: true,
  imports: [NgIf, NgFor, EducationalResourcesComponent],
  templateUrl: './accessibility-features.component.html',
  styleUrl: './accessibility-features.component.css'
})
export class AccessibilityFeaturesComponent implements OnInit {
  @Input() pages: PagesContainer = new PagesContainer;
  currentItem: CreateExplore = new CreateExplore();
  artifacts: CreateExplore[];
  likedArtifacts: CreateExplore[];
  checkActive: boolean;

  constructor() {
    this.artifacts = initialArtifacts;
    this.likedArtifacts = [];
    this.checkActive = false;
  }

  ngOnInit(): void {

    for (let i = 0; i < this.artifacts.length; i++) {
      const element = this.artifacts[i];
      if (element.bookmark === true) {
        this.likedArtifacts.push(element);
      }
    }

    this.checkActive = this.checkActiveFav();
  }

  OpenExplore() {
    this.pages.pageNo = 'explore';
  }

  checkActiveFav(): boolean {
    this.checkActive = this.artifacts.some((artifact) => {
      if (artifact.bookmark) {
        this.likedArtifacts.push(artifact);
        return true; // Bookmark is active
      }
      return false; // No active bookmark
    });
    console.log(this.checkActive);

    return this.checkActive;
  }

  toggleBookmark(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].bookmark = !this.artifacts[index].bookmark;
    }
  }

  trackByFn(item: any): number {
    return item.id; // or any unique identifier
  }

  readMore(item: CreateExplore) {
    this.currentItem = item;
    this.pages.pageNo = 'content';
    console.log(this.pages, this.currentItem);
  }

}

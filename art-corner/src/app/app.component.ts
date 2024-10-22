import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExploreComponentsComponent } from "./art-gallery/explore-components/explore-components.component";
import { IndexPageComponent } from "./art-gallery/index-page/index-page.component";
import { FeedbackAboutUsComponent } from "./feedback-about-us/feedback-about-us.component";
import { AccessibilityFeaturesComponent } from "./accessibility-features/accessibility-features.component";
import { PagesContainer } from './PagesContainer';
import { NgClass, NgIf } from '@angular/common';
import { CommunityForumComponent } from "./community-forum/community-forum.component";
import { EducationalResourcesComponent } from "./educational-resources/educational-resources.component";
import { CreateExplore } from './art-gallery/explore-components/CreateExplore';
import { initialArtifacts } from './data/initialArtifacts';
import { promises } from 'dns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExploreComponentsComponent, IndexPageComponent, FeedbackAboutUsComponent, AccessibilityFeaturesComponent, NgIf, NgClass, CommunityForumComponent, EducationalResourcesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  GetResults() {}
  artifacts: CreateExplore[];
  checkActiveFav: boolean;

  pages: PagesContainer = new PagesContainer();

  constructor() {
    this.pages.pageNo = 'index';
    this.artifacts = initialArtifacts;
    this.checkActiveFav = false;
  }

  checkActiveFavourite()
  {
    for (let i = 0; i < this.artifacts.length; i++) {
      const element = this.artifacts[i];
      if(element.bookmark === true)
      {
        this.checkActiveFav === true;
        break;
      }
    }

    return true;
  }

  OpenPage(page: string) {
    this.pages.pageNo = page;
  }

  getPages()
  {
    return this.pages;
  }
}

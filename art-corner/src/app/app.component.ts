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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExploreComponentsComponent, IndexPageComponent, FeedbackAboutUsComponent, AccessibilityFeaturesComponent, NgIf, NgClass, CommunityForumComponent, EducationalResourcesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  GetResults() {}

  pages: PagesContainer = new PagesContainer();

  constructor() {
    this.pages.pageNo = 'index';
  }

  OpenPage(page: string) {
    this.pages.pageNo = page;
  }

  getPages()
  {
    return this.pages;
  }
}

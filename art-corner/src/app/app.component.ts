import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExploreComponentsComponent } from "./art-gallery/explore-components/explore-components.component";
import { IndexPageComponent } from "./art-gallery/index-page/index-page.component";
import { FeedbackAboutUsComponent } from "./feedback-about-us/feedback-about-us.component";
import { AccessibilityFeaturesComponent } from "./accessibility-features/accessibility-features.component";
import { PagesContainer } from './PagesContainer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExploreComponentsComponent, IndexPageComponent, FeedbackAboutUsComponent, AccessibilityFeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages : PagesContainer[];

  constructor() {
    this.pages = [
      {
        pageName: "Home"
      },
      {
        pageName: "Explore"
      },
      {
        pageName: "Favourites"
      }
    ]
  }

  
}

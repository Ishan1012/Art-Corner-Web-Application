import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExploreComponentsComponent } from "./art-gallery/explore-components/explore-components.component";
import { IndexPageComponent } from "./art-gallery/index-page/index-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExploreComponentsComponent, IndexPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'art-corner';
  constructor(){
    setTimeout(() => {
      this.title = "Art Corner";
    }, 0);
  }
}

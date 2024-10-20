import { Component, Input } from '@angular/core';
import { CreateExplore } from '../art-gallery/explore-components/CreateExplore';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-educational-resources',
  standalone: true,
  imports: [NgIf],
  templateUrl: './educational-resources.component.html',
  styleUrl: './educational-resources.component.css'
})
export class EducationalResourcesComponent {
  @Input() currentItem: CreateExplore = new CreateExplore;
  
  item: CreateExplore = this.currentItem;
}

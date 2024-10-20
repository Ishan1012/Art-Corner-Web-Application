import { Component, Input, OnInit } from '@angular/core';
import { PagesContainer } from '../../PagesContainer';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [],
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'] // Fixed from 'styleUrl' to 'styleUrls'
})
export class IndexPageComponent{
  @Input() pages: PagesContainer = new PagesContainer;
  OpenExplore() {
    this.pages.pageNo = 2;
  }
}

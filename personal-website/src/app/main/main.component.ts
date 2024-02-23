import { Component, ViewChild } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent{
  currentSection: string = 'about';

  @ViewChild(ContentComponent) contentComponent!: ContentComponent;

  setSection(section: string){
    this.currentSection = section;

    this.contentComponent.title = section;
  }
}

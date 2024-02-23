import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnChanges{
  @Input() section!: string;
  title: string = 'Sobre Mim';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["section"]){
      var items = document.getElementsByClassName("toolbar-item");

      for (let i = 0; i < items.length; i++){
        var item = items[i];
        if (item.id == this.section){
          item.classList.add('hovered-toolbar-item');
        }
        else{
          item.classList.remove('hovered-toolbar-item');
        }
      }
    }
  }
}

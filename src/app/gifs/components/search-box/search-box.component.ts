import { Component,ViewChild ,ElementRef} from '@angular/core';
import {GifsService} from '../../services/gifs.service'
@Component({
  selector: 'gifs-search-box',
  template: `

  <h5>Buscar: </h5>
  <input type="text"
  class="form-control"
  placeholder="buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `

})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){

  }
  searchTag(){
    let newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTags(newTag);

    this.tagInput.nativeElement.value = "";
  }
}

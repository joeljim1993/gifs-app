import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `

  <h5>Buscar: </h5>
  <input type="text"
  class="form-control"
  placeholder="buscar gifs..."
  (keyup)="searchTag(txtTagInput.value)" 
  #txtTagInput
  >
  `

})
export class SearchBoxComponent {

  searchTag(newTag:string){
    console.log({newTag});

  }
}

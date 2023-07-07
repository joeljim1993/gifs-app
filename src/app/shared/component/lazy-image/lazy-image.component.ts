import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {


// manera como se realiza un input
  @Input()
  public url!:string;

  @Input()
  public alt:string = "";

  public hasLoaded:boolean = false;

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  if(!this.url) throw new Error(" url property is requerid");

 }

//  funcion llamada por el evento onload de img
onLoad(){
  console.log("image loaded");
  this.hasLoaded = true;

}

}

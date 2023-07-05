import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class CardComponent implements OnInit {


  @Input()
  public gif!: Gif;

  constructor(){
    console.log("gif",this.gif);
    console.log("ejecutando gifs-card");


  }
  ngOnInit(): void {
    if ( !this.gif) throw new Error('Gif property is requerid');
  }

}

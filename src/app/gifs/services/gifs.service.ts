
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from './../interfaces/gifs.interface';



@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList:Gif[] = [];
  // arreglo donde se guardaran las busquedas
private _tagsHistory: string[] = [];

private apiKey:string       = "RNodhamB4QEwngKBRcGaDSk8rrY9p4lk";
private serviceUrl:string   = 'https:api.giphy.com/v1/gifs'

  constructor( private http:HttpClient ) { }

// getter para obterner el tagHistory como una copia y no pueda ser modificado
get tagsHistory(){
  return [...this._tagsHistory];
}

private organizeHistory(tag:string){
  tag = tag.toLowerCase();

  if(this._tagsHistory.includes(tag)){
    this._tagsHistory = this._tagsHistory.filter( (oldTag)=> oldTag !== tag)
  }

  this._tagsHistory.unshift( tag);
  this._tagsHistory = this.tagsHistory.splice(0,10);
  this.saveLocalStorage();
}

private saveLocalStorage():void{
  localStorage.setItem('history',JSON.stringify( this._tagsHistory ))
}

private loadLocalStorage():void{
  if ( !localStorage.getItem('history') ) return;

  this._tagsHistory = JSON.parse( localStorage.getItem('history')!)
}
// agrega la busqueda hecha al tagHistory
searchTags(tag:string):void{
  if( tag.length === 0) return;

  this.organizeHistory( tag );
  // this._tagsHistory.unshift( tag );

  let tagshistory = this._tagsHistory;
  console.log([...tagshistory]);

  const params = new HttpParams()
  .set('api_key',this.apiKey)
  .set('limit',10)
  .set('q',tag)

  // em el caso del http.get el tipo de dato por defecto es generico <...>
  this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
  .subscribe( (resp ) =>{
    console.log("resp",resp.data );
    this.gifList = resp.data;
    console.log("this.gifList",this.gifList);

  })



}

}

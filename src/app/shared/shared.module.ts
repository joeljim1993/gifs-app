import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LazyImageComponent } from './component/lazy-image/lazy-image.component';


// si no se exports un componente dado, no se podra ver en otros modulos 
@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LazyImageComponent
  ]

})
export class SharedModule { }

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'projeto01';
  numero: number = 0;

  adicionar():void{
    this.numero++
  }

  diminuir():void{
    this.numero--
  }

}

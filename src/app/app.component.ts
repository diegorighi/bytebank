import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferencia: any;

  transmitir($event){
    console.log($event);
    this.transferencia = $event;
  }

  title = 'bytebank';
}

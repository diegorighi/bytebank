import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-nova-transferencia',
  templateUrl: './app-nova-transferencia.component.html',
  styleUrls: ['./app-nova-transferencia.component.scss']
})
export class AppNovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() aoTransmitir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(){
    const dadoObjetoFormatado = { valor: this.valor, destino: this.destino };
    this.aoTransmitir.emit(dadoObjetoFormatado);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}

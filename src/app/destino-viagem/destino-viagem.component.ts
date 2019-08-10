import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destino-viagem',
  templateUrl: './destino-viagem.component.html',
  styleUrls: ['./destino-viagem.component.css']
})
export class DestinoViagemComponent implements OnInit {
  @Input() nome: string;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
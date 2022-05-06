import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarInterior() {
    let fotos = document.querySelectorAll(".data-box");
    for(let i = 0; i < fotos.length; i++) {
      if(fotos[i].getAttribute("data-item") === "interior")
      {
        fotos[i].classList.add("hide");    
      }
    }
  }
}

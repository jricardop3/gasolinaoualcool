import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String = "Resultado"
  public precoAlcool: string = ""
  public precoGasolina: string =""
  calcular(){
    if (this.precoAlcool && this.precoGasolina){
      let pAlcool = parseFloat(this.precoAlcool)
      let pGasolina = parseFloat(this.precoGasolina)
      let res = pAlcool / pGasolina
      if (res >= 0.7){
        this.resultado = "Melhor usar Gasolina!"
      }
      else {
        this.resultado = "Melhor Usar Álcool"
      }
    }else{
      this.resultado = "Preencha corretamente os campos!"
    }
  }

  constructor() {}

}

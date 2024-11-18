import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})

export class IndexComponent {  
  // Variaveis para as classes de elementos
  corpo: string = ""
  imagem: string = ""
  inputs: string = ""
  bg: string = ""
  titulo: string = ""
  paragrafor: string = ""

  ngOnInit()
  {
    this.fundo_site()
  }

  fundo_site(): void
  {
    if (localStorage.getItem("fundo") === "white") {

      this.corpo = "corpo_claro"

      this.imagem = "../../assets/Pagina index/Lua.png"

      this.inputs = "campo_login_email campo_login_email_white_mode"

      this.bg = "claro_escuro"

      this.titulo = "campo_login_titulo campo_login_titulo_white_mode"
        
      this.paragrafor = "campo_login_texto campo_login_texto_white_mode"

    } else {

      this.corpo = "corpo_escuro"

      this.imagem = "../../assets/Pagina index/Sol.png"
      
      this.inputs = "campo_login_email"

      this.bg = "claro_escuro"
        
      this.titulo = "campo_login_titulo"

      this.paragrafor = "campo_login_texto"

    }
  }

  botao_white_black_mode(): void
  {
    if (localStorage.getItem("fundo") === "white") {
      localStorage.setItem("fundo", "black")

    } else {
      localStorage.setItem("fundo", "white")

    }

    this.fundo_site()
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DefaultComponent } from "./fundos-do-display-de-conversas/default/default.component";
import { ConversaComponent } from "./fundos-do-display-de-conversas/conversa/conversa.component";

@Component({
  selector: 'app-chat-main',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, DefaultComponent, ConversaComponent],
  templateUrl: './chat-main.component.html',
  styleUrl: './chat-main.component.css'
})
export class ChatMainComponent {
  // Adicionado class e imagens
  fundo: string = "escuro"
  contatos: string = ""

  // icones black ou white ?
  img: string = ""

  // Largura da parte de contatos
  largura: object = {}
  largura_msg: object = {}
  flag: boolean = false

  // Textos do campos de input
  campo_contatos: string = ""
  
  // Alterar o display de conversas
  display_conv: number = 1

  // Imagem da imagem do sol e da lua
  imagem: string = "../../assets/Pagina index/Sol.png"

  ngOnInit()
  {
    switch(localStorage.getItem("fundo"))
    {
      case ("black"):
        this.fundo = "escuro"
        this.imagem = "../../assets/Pagina index/Sol.png"
        this.img = "black"
        break
      
      case ("white"):
        this.fundo = "claro"
        this.imagem = "../../assets/Pagina index/Lua.png"
        this.img = "white"
        break

      default:
        this.fundo = "escuro"
        this.imagem = "../../assets/Pagina index/Sol.png"
        this.img = "black"
        break
    }

    if (window.screen.width <= 700) {
      this.largura = {"margin-left": "-60%"}
      this.largura_msg = {"margin-left": "6.3%"}

    } else {
      this.largura = {"margin-left": "-20%"}

    }
  }

  abrir_menu()
  {
    if (window.screen.width <= 700) {
      if (this.flag == false) {
        this.contatos = "contatos_escuro abrir_contatos_mobile"
        this.largura = {"margin-left": "20%"}
        this.largura_msg = {"margin-left": "20%"}
        this.flag = true
  
      } else {
        this.contatos = "contatos_escuro fechar_contatos_mobile"
        this.largura = {"margin-left": "-60%"}
        this.flag = false
  
      }

    } else {

      if (this.flag == false) {
        this.contatos = "contatos_escuro abrir_contatos"
        this.largura = {"margin-left": "10%"}
        this.flag = true
  
      } else {
        this.contatos = "contatos_escuro fechar_contatos"
        this.largura = {"margin-left": "-20%"}
        this.flag = false
  
      }
    }
  }

  alterar_parte_conversa():void
  {
    this.display_conv = 2
  }

  // Imagem do sol e lua
  dia_noite()
  {
    if (localStorage.getItem("fundo") == "black") {
      this.fundo = "claro"
      this.imagem = "../../assets/Pagina index/Lua.png"
      this.img = "white"
      localStorage.setItem("fundo", "white")

    } else if (localStorage.getItem("fundo") == "white") {
      this.fundo = "escuro"
      this.imagem = "../../assets/Pagina index/Sol.png"
      this.img = "black"
      localStorage.setItem("fundo", "black")

    } else {
      this.fundo = "escuro"
      this.imagem = "../../assets/Pagina index/Sol.png"
      this.img = "black"
      localStorage.setItem("fundo", "white")
    }
  }
}

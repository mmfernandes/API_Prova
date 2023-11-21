import { Categoria } from './../../../models/categoria.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarefa } from '../../../models/tarefa.model';


@Component({
  selector: "app-tarefas-listar",
  templateUrl: "./tarefas-listar.component.html",
  styleUrls: ["./tarefas-listar.component.css"],
})
export class TarefasListarComponent {
  columnsTable: string [] = [
    "TarefaId",
    "Status",
    "Titulo",
    "Descricao",
  ];
  tarefas: Tarefa[] = []; 

  constructor(
    private readonly client: HttpClient,
    private readonly snackBar: MatSnackBar,
  ) {}
  public ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:5001/api/tarefa/listar")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          console.table(tarefas);
          this.tarefas = tarefas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
          this.snackBar.open('Erro ao obter dados do servidor', '', {
            duration: 3000, // 3 segundos
          });
          
        },
      });
  }
}

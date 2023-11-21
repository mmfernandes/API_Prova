import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TarefasListarComponent } from "./pages/tarefas/tarefas-listar/tarefas-listar.component";

const routes: Routes = [
  {
    path: "",
    component: TarefasListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersViewComponent } from './pages/folders-view/folders-view.component';
import { TasksViewComponent } from './pages/tasks-view/tasks-view.component';


const routes: Routes = [
  { path: 'tasks', component: TasksViewComponent },
  { path: 'folders', component:  FoldersViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersViewComponent } from './pages/folders-view/folders-view.component';
import { TasksViewComponent } from './pages/tasks-view/tasks-view.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';


const routes: Routes = [
  { path: 'tasks', component: TasksViewComponent },
  { path: 'folders', component:  FoldersViewComponent},
  { path: 'editTask', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { FoldersViewComponent } from './pages/folders-view/folders-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { TasksViewComponent } from './pages/tasks-view/tasks-view.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';




const routes: Routes = [
  { path: '', component: LoginViewComponent},
  { path: 'tasks/:id_folder', component: TasksViewComponent,canActivate:[AuthGuardGuard]},
  { path: 'folders', component:  FoldersViewComponent},
  { path: 'editTask/:id', component: UpdateTaskComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

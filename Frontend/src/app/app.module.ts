import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { FolderTableComponent } from './components/folder-table/folder-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksViewComponent } from './pages/tasks-view/tasks-view.component';
import { FoldersViewComponent } from './pages/folders-view/folders-view.component';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { AddInputSharedComponent } from './components/add-input-shared/add-input-shared.component';
//Angular material buttons
import {MatButtonModule} from '@angular/material/button';
import { UpdateInputTaskComponent } from './components/update-input-task/update-input-task.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { InputAddFolderComponent } from './components/input-add-folder/input-add-folder.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent,
    FolderTableComponent,
    TasksViewComponent,
    FoldersViewComponent,
    HeaderComponent,
    UpdateTaskComponent,
    AddInputSharedComponent,
    UpdateInputTaskComponent,
    InputAddFolderComponent,
    FormLoginComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
    
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

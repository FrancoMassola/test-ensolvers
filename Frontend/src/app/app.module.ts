import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { FolderTableComponent } from './components/folder-table/folder-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksViewComponent } from './pages/tasks-view/tasks-view.component';
import { FoldersViewComponent } from './pages/folders-view/folders-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent,
    FolderTableComponent,
    TasksViewComponent,
    FoldersViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

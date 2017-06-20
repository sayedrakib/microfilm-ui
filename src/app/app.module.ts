import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'microfilm-search', component: SearchComponent },
  { path: 'admin', component: AdminComponent },
  // redirectTo: to /admin for development purpose only for now, change later.
  { path: '', redirectTo: '/admin', pathMatch: 'full'}, 
   // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent,
    AdminComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

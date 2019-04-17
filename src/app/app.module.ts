import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './users/user-resolver';
import { Ng2SmartTableModule } from 'ngx-smart-table';
import { UsersModule } from './users/users.module';

const approutes: Routes = [

]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    UsersModule,
    RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, UserResolver]
})
export class AppModule { }

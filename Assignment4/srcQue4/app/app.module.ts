import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OSComponent } from './os/os.component';
import { PLComponent } from './pl/pl.component';
import { DBComponent } from './db/db.component';

@NgModule({
  declarations: [
    AppComponent,
    OSComponent,
    PLComponent,
    DBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

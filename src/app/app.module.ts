import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SkccDetailsComponent,
  SkccListComponent,
  SkccService,
  SkccThumbnailComponent
} from './skccservice/index';

@NgModule({
  declarations: [
    AppComponent,
    SkccDetailsComponent,
    SkccListComponent,
    SkccThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SkccService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

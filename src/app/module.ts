import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './component';
import { AppRoutingModule } from './routing.module';
import { UsersModule } from './users/module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, BrowserAnimationsModule, MatToolbarModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

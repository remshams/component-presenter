import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component';
import { ConferencesModule } from './conferences/module';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ConferencesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

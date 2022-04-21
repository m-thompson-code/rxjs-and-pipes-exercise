import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from './pipes/title.pipe';
import { EmailPipe } from './pipes/email.pipe';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

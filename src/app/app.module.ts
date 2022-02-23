import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateFilterPipe } from './date-filter.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [AppComponent, DateFilterPipe, StatusPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

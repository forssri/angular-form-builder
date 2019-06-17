import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormBuilderService } from './form-builder.service';
import { LayoutBuilderComponent } from './layout-builder/layout-builder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LayoutBuilderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FormBuilderService]
})
export class AppModule { }

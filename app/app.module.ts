import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { FeeComponent } from './fees/fee.component';
import { NavbarComponent } from './nav/nav.component';

import { FeeService } from './fees/fee.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule
                   ],
  declarations: [ AppComponent,
                          FeeComponent,
                          NavbarComponent
                          ],
  providers: [ FeeService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
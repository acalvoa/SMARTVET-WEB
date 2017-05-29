import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FeaturesModule } from './features/features.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, FeaturesModule, ServicesModule, PipesModule, SharedModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';
import { VideoComponent } from './video/video.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features.routes';
import { AlianzasComponent } from './alianzas/alianzas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuiensomosComponent } from './quiensomos/quiensomos.component';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, SharedModule, FeaturesRoutingModule],
  declarations: [HomeComponent, SplashComponent,VideoComponent, AlianzasComponent, ContactoComponent, QuiensomosComponent],
  exports: [HomeComponent, SplashComponent, VideoComponent, AlianzasComponent, ContactoComponent, QuiensomosComponent]
})
export class FeaturesModule {
}

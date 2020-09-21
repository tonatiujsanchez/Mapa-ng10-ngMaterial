import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material - Components
import { MaterialModule } from './material.module';

import { MapaComponent } from './components/mapa/mapa.component';
import { EditarMapaComponent } from './components/mapa/editar-mapa.component';

// Angular maps
import { AgmCoreModule } from '@agm/core';





@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    EditarMapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// npm install @agm/core@1.1.0               // Usar esta versión en caso de un error en la version más actual
// AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14   // apiKey FH
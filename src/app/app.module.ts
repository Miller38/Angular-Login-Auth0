import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-51kkoyfzhq5skyfx.us.auth0.com',
      clientId: 'm55i21Zqo5BfusvT720XpzPcPIqcgDEZ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

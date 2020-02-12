import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profle/profile.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { RegistrationComponent } from './Registration/Registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabsModule } from 'ngx-bootstrap';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
    LoginComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

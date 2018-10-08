import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducer } from './shared/store/reducers/app.reducer';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ConfigEffects } from './shared/store/effects/config.effects';
import { UserEffects } from './shared/store/effects/user.effects';
import { UserService } from './shared/services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routerTransition } from './core/animation/router.animations';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { MaterialModule } from './material.module';
import { SlimLoadingBarModule } from './shared/components/slim-loading';

// import { ButtonModule } from './shared/components/buttons';
// import { BUTTON_COMPONENTS } from './shared/components/buttons/button.config';
import { PrimaryButtonComponent } from './shared/components/buttons/primary-button/primary-button.component';
import { SquareButtonComponent } from './shared/components/buttons/square-button/square-button.component';
import { SecondaryButtonComponent } from './shared/components/buttons/secondary-button/secondary-button.component';
import { DefaultButtonComponent } from './shared/components/buttons/default-button/default-button.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    PeopleComponent,
    PersonComponent,
    UserDetailsComponent,
    PrimaryButtonComponent,
    SquareButtonComponent,
    SecondaryButtonComponent,
    DefaultButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

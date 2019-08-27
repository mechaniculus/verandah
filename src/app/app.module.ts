import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MDBBootstrapModule, CarouselModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WINDOW_PROVIDERS } from './services/window.service';
import { MenusComponent } from './menus/menus.component';
import { PrivateDiningComponent } from './private-dining/private-dining.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsModule } from 'ngx-tabset';
import { MnFullpageModule, MnFullpageService } from 'ngx-fullpage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ResponsiveModule } from 'ngx-responsive';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { AboutContentComponent } from './about-content/about-content.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { WineComponent } from './wine/wine.component';
import { FounderComponent } from './founder/founder.component';
import { FooterComponent } from './footer/footer.component';
import { EventsContentComponent } from './events-content/events-content.component';
import { BrunchComponent } from './brunch/brunch.component';
import { ParkingComponent } from './parking/parking.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PressContentComponent } from './press-content/press-content.component';
import { WkanaExpressComponent } from './wkana-express/wkana-express.component';
import { MediaComponent } from './media/media.component';
import { AtverandahComponent } from './atverandah/atverandah.component';
import { ChefTastingComponent } from './chef-tasting/chef-tasting.component';
import { VegTastingComponent } from './veg-tasting/veg-tasting.component';
import { MothersDayComponent } from './mothers-day/mothers-day.component';
import { VerandahTastingComponent } from './verandah-tasting/verandah-tasting.component';
import { CareersComponent } from './careers/careers.component';

// https://jfcere.github.io/ngx-malihu-scrollbar/
// https://www.npmjs.com/package/ngx-tabset

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    MenusComponent,
    PrivateDiningComponent,
    ReservationsComponent,
    PartnersComponent,
    EventsComponent,
    ContactComponent,
    MobileViewComponent,
    AboutContentComponent,
    LunchComponent,
    DinnerComponent,
    WineComponent,
    FounderComponent,
    FooterComponent,
    EventsContentComponent,
    BrunchComponent,
    ParkingComponent,
    CocktailsComponent,
    ContactUsComponent,
    PressContentComponent,
    WkanaExpressComponent,
    MediaComponent,
    AtverandahComponent,
    ChefTastingComponent,
    VegTastingComponent,
    MothersDayComponent,
    VerandahTastingComponent,
    CareersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    TabsModule.forRoot(),
    MnFullpageModule.forRoot(),
    NgbModule,
    FormsModule,
    ResponsiveModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
  ],

  providers: [WINDOW_PROVIDERS, MnFullpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

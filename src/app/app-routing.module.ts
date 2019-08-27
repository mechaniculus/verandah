import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenusComponent } from './menus/menus.component';
import { PartnersComponent } from './partners/partners.component';
import { PrivateDiningComponent } from './private-dining/private-dining.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { CareersComponent } from './careers/careers.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'private-dining', component: PrivateDiningComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

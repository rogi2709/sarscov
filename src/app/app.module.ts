import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import{DisplaydataComponent}from './pages/displaydata/displaydata.component'
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { MapComponent } from './pages/map/map.component';
import { ChartsModule } from 'ng2-charts';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {FieldsetModule} from 'primeng/fieldset';







@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    DataViewModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    ChartsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FieldsetModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

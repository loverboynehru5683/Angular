import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NehruComponent } from './nehru/nehru.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AttributeDirsComponent } from './attribute-dirs/attribute-dirs.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { SearchByNamePipe } from './search-by-name.pipe';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { First1Component } from './first1/first1.component';
import { Second1Component } from './second1/second1.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { CoursesortPipe } from './coursesort.pipe';
import { CoursesearchPipe } from './coursesearch.pipe';
import { ReactFormsComponent } from './react-forms/react-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NehruComponent,
    CalculatorComponent,
    ProductsComponent,
    AttributeDirsComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwowayBindingComponent,
    StructDirectivesComponent,
    InterpolationComponent,
    PipesComponent,
    SortPipe,
    SearchByNamePipe,
    Child1Component,
    Parent1Component,
    FirstComponent,
    SecondComponent,
    JavaComponent,
    WebComponent,
    routingComponents,
    First1Component,
    Second1Component,
    FilterPipePipe,
    CoursesortPipe,
    CoursesearchPipe,
    ReactFormsComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, TechRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
})
export class FlightsSearchComponent {
  constructor(private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  search(): void {
    alert('Search');
  }

  async terms() {
    const { LazyComponent } = await import('../lazy/lazy.component');
    this.vcref.clear();
    this.vcref.createComponent(this.cfr.resolveComponentFactory(LazyComponent));
  }
}

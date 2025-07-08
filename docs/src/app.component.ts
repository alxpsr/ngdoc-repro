import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// import { NgDocThemeService } from '@ng-doc/app';

@Component({
  // animations: [routingAnimation()],
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class AppComponent {
  // private contexts = inject(ChildrenOutletContexts);
  // protected readonly themeService: NgDocThemeService = inject(NgDocThemeService);

  constructor() {
    // this.themeService.set('vflow-theme-dark');
  }

  getRouteAnimationData() {
    // return this.contexts.getContext('primary')?.route?.snapshot?.title;
  }
}

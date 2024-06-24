import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trailer2',
  standalone: true,
  imports: [LayoutModule],
  templateUrl: './trailer2.component.html',
  styleUrl: './trailer2.component.css',
})
export class Trailer2Component {
  @ViewChild('player', { static: true }) video!: ElementRef;
  bpo = inject(BreakpointObserver);

  transformations = {};
  cloudinaryVideoUrl = '';
  posterUrl = '';
  publicId = 'wizarding-world/harry-potter-sorting-hat.mp4';
  prefix = 'https://res.cloudinary.com';
  cloudName = 'tamas-demo';

  orientation = '';

  subscriptions: Subscription[] = [];

  ngOnInit() {
    const portraitSub = this.bpo
      .observe(['(orientation: portrait)'])
      .subscribe((result) => {
        if (result.matches) {
          this.orientation = 'portrait';
          // this.cloudinaryVideoUrl = `${this.prefix}/${this.cloudName}/video/upload/q_auto,f_auto:video/w_400,g_auto,c_fill,ar_9:16/${this.publicId}`;
          this.cloudinaryVideoUrl = `${this.prefix}/${this.cloudName}/video/upload/q_auto,f_auto:video/w_400,c_fill,ar_9:16/${this.publicId}`;
          this.posterUrl = `${this.prefix}/${this.cloudName}/image/upload/w_400,h_710,c_pad,b_auto/wizarding-world/logo`;
        }
        this.initialisePlayer();
      });
    const landscapeSub = this.bpo
      .observe(['(orientation: landscape)'])
      .subscribe((result) => {
        if (result.matches) {
          this.orientation = 'landscape';
          this.cloudinaryVideoUrl = `${this.prefix}/${this.cloudName}/video/upload/q_auto,f_auto:video/w_800,g_auto,c_fill,ar_16:9/${this.publicId}`;
          this.posterUrl = `${this.prefix}/${this.cloudName}/image/upload/w_800,h_450,c_pad,b_auto/wizarding-world/logo`;
        }
        this.initialisePlayer();
      });

    this.subscriptions.push(portraitSub, landscapeSub);
  }

  ngAfterViewInit(): void {
    this.initialisePlayer();
  }

  initialisePlayer(): void {
    this.video.nativeElement.src = this.cloudinaryVideoUrl;
    this.video.nativeElement.poster = this.posterUrl;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

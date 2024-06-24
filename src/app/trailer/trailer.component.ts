import { Component, ViewChild, ElementRef } from '@angular/core';
import cloudinary from 'cloudinary-video-player';
// import 'cloudinary-video-player/cld-video-player.min.css';
import 'cloudinary-video-player/dash.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [],
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css'],
})
export class TrailerComponent {
  @ViewChild('player', { static: true }) video!: ElementRef;

  orientation!: string;
  transformation = {};
  player!: cloudinary.VideoPlayer;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.initializePlayer();
  }

  initializePlayer(): void {
    const options = {
      controls: true,
      cloudName: 'tamas-demo',
      logoImageUrl:
        'https://res.cloudinary.com/tamas-demo/image/upload/v1718050092/wizarding-world/logo',
      posterOptions: { publicId: 'wizarding-world/logo' },
      fluid: true,
    };

    this.player = cloudinary.videoPlayer(this.video.nativeElement, options);
    this.player.source('harry-potter-trailer', {
      sourceTypes: ['hls'],
    });
  }
}

import {
  CommonModule,
  NgOptimizedImage,
  provideCloudinaryLoader,
} from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  // imports: [CommonModule],
  imports: [CommonModule, NgOptimizedImage],
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/tamas-demo')],
  templateUrl: './gallery-image.component.html',
  styleUrl: './gallery-image.component.css',
})
export class GalleryImageComponent implements OnInit {
  @Input({ required: true }) image!: string;
  // @Input() placeholder!: string;

  // @Output() loaded = new EventEmitter<string>();

  // imageLoaded: boolean = false;

  ngOnInit() {
    // this.loaded.emit(this.image);
  }

  onLoad() {
    // this.loaded.emit(this.image);
    // this.imageLoaded = true;
  }
}

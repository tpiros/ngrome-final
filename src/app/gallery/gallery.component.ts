// image-gallery.component.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { WizardService } from '../wizard.service';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';

type ImagePair = {
  high: string;
  low: string;
};

@Component({
  selector: 'app-image-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [GalleryImageComponent],
})
export class GalleryComponent implements OnInit {
  // images = signal<ImagePair[]>([]);
  images = signal<string[]>([]);
  wizardService = inject(WizardService);
  private total = 0;
  private pageSize = 3;
  private currentPage = 0;

  ngOnInit(): void {
    // this.loadImages(this.currentPage);
    this.images.set(
      this.wizardService.getAllHogwartsImagesForNgOptimizeImage()
    );
  }

  // loadImages(page: number): void {
  //   const newImages = this.wizardService.getPaginatedHogwartsImages(
  //     page,
  //     this.pageSize
  //   );
  //   this.total = this.wizardService.getAllHogwartsImages().length;

  //   this.images.update((previousImages: ImagePair[]) => {
  //     return [...previousImages, ...newImages];
  //   });

  //   this.currentPage++;
  // }

  // loaded(item: string) {
  //   if (this.images().length < this.total) {
  //     const allLoaded = this.images().every((img) => img.high === item);
  //     if (!allLoaded) {
  //       this.loadImages(this.currentPage);
  //     }
  //   }
  // }
}

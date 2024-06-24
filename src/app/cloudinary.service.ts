import { Injectable } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { blur } from '@cloudinary/url-gen/actions/effect';
@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  img!: CloudinaryImage;
  cld;
  constructor() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'tamas-demo',
      },
    });
  }

  generateCardImage(publicId: string) {
    this.img = this.cld.image(publicId);
    this.img
      .resize(thumbnail().width(300).gravity(focusOn(face())).zoom(0.4))
      .roundCorners(byRadius(4))
      .delivery(format('auto'))
      .delivery(quality('auto'));
    return this.img;
  }

  generateInfoImage(publicId: string) {
    this.img = this.cld.image(publicId);
    this.img
      .resize(thumbnail().width(800))
      .roundCorners(byRadius(8))
      .delivery(format('auto'))
      .delivery(quality('auto'));
    return this.img;
  }

  generateGalleryImage(publicId: string) {
    this.img = this.cld.image(publicId);
    this.img
      .resize(thumbnail().width(640).gravity('auto'))
      .roundCorners(byRadius(10))
      .delivery(format('auto'))
      .delivery(quality('auto'));
    return this.img.toURL();
  }

  generateLQIPGalleryImage(publicId: string) {
    this.img = this.cld.image(publicId);
    this.img
      .resize(thumbnail().width(640).gravity('auto'))
      .roundCorners(byRadius(10))
      .effect(blur().strength(2000))
      .delivery(format('auto'))
      .delivery(quality('auto'));
    return this.img.toURL();
  }
}

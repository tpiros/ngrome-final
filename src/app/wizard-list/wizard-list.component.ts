import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Wizard } from '../wizard';
import { CloudinaryModule } from '@cloudinary/ng';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { CloudinaryService } from '../cloudinary.service';
@Component({
  selector: 'app-wizard-list',
  standalone: true,
  imports: [RouterModule, CloudinaryModule],
  templateUrl: './wizard-list.component.html',
  styleUrl: './wizard-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardListComponent {
  @Input() wizard!: Wizard;
  img!: CloudinaryImage;
  cloudinaryService = inject(CloudinaryService);
  ngOnInit() {
    const publicId = `wizarding-world/${this.wizard.name
      .toLowerCase()
      .replace(' ', '-')}`;
    this.img = this.cloudinaryService.generateCardImage(publicId);
  }

  checkRender(): void {
    console.log('Angular rendered something');
  }
}

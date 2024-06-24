import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Wizard } from '../wizard';
import { WizardService } from '../wizard.service';
import { CloudinaryService } from '../cloudinary.service';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { CloudinaryModule } from '@cloudinary/ng';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard-info',
  standalone: true,
  imports: [RouterOutlet, CloudinaryModule, CommonModule],
  templateUrl: './wizard-info.component.html',
  styleUrls: ['./wizard-info.component.css'],
})
export class WizardInfoComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  wizardService = inject(WizardService);
  cloudinaryService = inject(CloudinaryService);
  wizard$!: Observable<Wizard | undefined>;
  img!: CloudinaryImage;

  ngOnInit() {
    this.wizard$ = this.route.params.pipe(
      switchMap((params) => {
        const wizardId = Number(params['id']);
        return this.wizardService.getWizardById(wizardId);
      })
    );

    this.wizard$.subscribe((wizard) => {
      if (wizard) {
        const publicId = `wizarding-world/${wizard.name
          .toLowerCase()
          .replace(' ', '-')}`;
        this.img = this.cloudinaryService.generateInfoImage(publicId);
      }
    });
  }
}

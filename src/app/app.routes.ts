import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'wizard/:id',
    loadComponent: () =>
      import('./wizard-info/wizard-info.component').then(
        (mod) => mod.WizardInfoComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((mod) => mod.ProfileComponent),
  },
  {
    path: 'trailer',
    loadComponent: () =>
      import('./trailer/trailer.component').then((mod) => mod.TrailerComponent),
  },
  {
    path: 'trailer2',
    loadComponent: () =>
      import('./trailer2/trailer2.component').then(
        (mod) => mod.Trailer2Component
      ),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((mod) => mod.GalleryComponent),
  },
];

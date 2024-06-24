import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  wizardService: WizardService = inject(WizardService);

  updateStudentHouse(index: number, newHouse: string) {
    this.wizardService.moveWizard(index, newHouse);
  }
}

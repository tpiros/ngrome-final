import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WizardListComponent } from '../wizard-list/wizard-list.component';
import { Wizard } from '../wizard';
import { WizardService } from '../wizard.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WizardListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  wizards$: Observable<Wizard[]>;
  wizardService: WizardService = inject(WizardService);

  constructor() {
    this.wizards$ = this.wizardService.getAllWizards();
  }

  updateStudentHouse(index: number, newHouse: string) {
    this.wizardService.moveWizard(index, newHouse);
  }
}

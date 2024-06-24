import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

import { RouterOutlet } from '@angular/router';
import { SpeculationRulesService } from './speculation-rules.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  speculationRulesService = inject(SpeculationRulesService);

  ngOnInit(): void {
    this.speculationRulesService.addSpeculationRules();
  }
}

import { Component, inject } from '@angular/core';
import { CloudinaryService } from '../cloudinary.service';
import { CloudinaryModule } from '@cloudinary/ng';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CloudinaryModule],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css',
})
export class AiComponent {
  cloudinaryService = inject(CloudinaryService);
  genAiImg1 = this.cloudinaryService.genFill('moped', '16x9');
  genAiImg2 = this.cloudinaryService.genFill('girl-fashion', '16x9');
  genAiImg3 = this.cloudinaryService.genFill('girl-fashion', '4x3');
}

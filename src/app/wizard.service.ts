import { Injectable, inject } from '@angular/core';
import { Wizard } from './wizard';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CloudinaryService } from './cloudinary.service';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  cloudinaryService = inject(CloudinaryService);
  protected wizards: Wizard[] = [
    {
      id: 1,
      name: 'Harry Potter',
      house: 'Gryffindor',
      wand: {
        wood: 'Holly',
        core: 'Phoenix feather',
        length: '11 inches',
      },
      bio: 'The Boy Who Lived, Harry is known for his bravery, his role in defeating Voldemort, and his strong sense of justice.',
    },
    {
      id: 2,
      name: 'Ron Weasley',
      house: 'Gryffindor',
      wand: {
        wood: 'Willow',
        core: 'Unicorn hair',
        length: '14 inches',
      },
      bio: "Harry's loyal best friend, Ron is known for his humor, courage, and strategic thinking in chess and battles.",
    },
    {
      id: 3,
      name: 'Hermoine Granger',
      house: 'Gryffindor',
      wand: {
        wood: 'Vine',
        core: 'Dragon heartstring',
        length: '10¾ inches',
      },
      bio: 'The brightest witch of her age, Hermione is known for her intelligence, dedication, and strong principles.',
    },
    {
      id: 4,
      name: 'Draco Malfoy',
      house: 'Slytherin',
      wand: {
        wood: 'Hawthorn',
        core: 'Unicorn hair',
        length: '10 inches',
      },
      bio: 'A member of the Malfoy family, Draco is known for his rivalry with Harry and his complex journey throughout the series.',
    },
    {
      id: 5,
      name: 'Albus Dumbledore',
      house: 'Gryffindor',
      wand: {
        wood: 'Elder',
        core: 'Thestral tail hair',
        length: '15 inches',
      },
      bio: 'The wise and powerful headmaster of Hogwarts, Dumbledore is known for his wisdom, kindness, and crucial role in the fight against Voldemort.',
    },
    {
      id: 6,
      name: 'Lord Voldermort',
      house: 'Slytherin',
      wand: {
        wood: 'Yew',
        core: 'Phoenix feather',
        length: '13½ inches',
      },
      bio: 'The Dark Lord, Voldemort is known for his fearsome power, his quest for immortality, and his reign of terror over the wizarding world.',
    },
    {
      id: 7,
      name: 'Rubeus Hagrid',
      house: 'Gryffindor',
      wand: {
        wood: 'Oak',
        core: 'Unknown',
        length: '16 inches (broken)',
      },
      bio: 'The Keeper of Keys and Grounds at Hogwarts, Hagrid is known for his love of magical creatures and his loyalty to Dumbledore.',
    },
    {
      id: 8,
      name: 'Severus Snape',
      house: 'Slytherin',
      wand: {
        wood: 'Unknown',
        core: 'Unknown',
        length: 'Unknown',
      },
      bio: 'The Potions Master and later Headmaster of Hogwarts, Snape is known for his complex character, his deep love for Lily Potter, and his pivotal role in the defeat of Voldemort.',
    },
    {
      id: 9,
      name: 'Luna Lovegood',
      house: 'Ravenclaw',
      wand: {
        wood: 'Unknown',
        core: 'Unknown',
        length: 'Unknown',
      },
      bio: "Known for her quirky personality and unique perspective, Luna is a loyal friend and a member of Dumbledore's Army.",
    },
  ];

  private wizardsSubject = new BehaviorSubject<Wizard[]>(this.wizards);
  wizards$: Observable<Wizard[]> = this.wizardsSubject.asObservable();

  getAllWizards(): Observable<Wizard[]> {
    return this.wizards$;
  }

  getWizardById(id: number): Observable<Wizard | undefined> {
    return this.wizards$.pipe(
      map((wizards) => wizards.find((wizard) => wizard.id === id))
    );
  }

  moveWizard(id: number, newHouse: string): void {
    const wizardIndex = this.wizards.findIndex((wizard) => wizard.id === id);
    if (wizardIndex !== -1) {
      const updatedWizards = [
        ...this.wizards.slice(0, wizardIndex),
        { ...this.wizards[wizardIndex], house: newHouse },
        ...this.wizards.slice(wizardIndex + 1),
      ];
      this.wizards = updatedWizards;
      this.wizardsSubject.next(updatedWizards);
    }
  }

  getAllHogwartsImages(): { high: string; low: string }[] {
    const imageUrls: { high: string; low: string }[] = [];
    const imageCount = 19;
    for (let i = 1; i <= imageCount; i++) {
      imageUrls.push({
        high: this.cloudinaryService.generateGalleryImage(
          `wizarding-world/hogwarts${i}`
        ),
        low: this.cloudinaryService.generateLQIPGalleryImage(
          `wizarding-world/hogwarts${i}`
        ),
      });
    }
    return imageUrls;
  }

  getAllHogwartsImagesForNgOptimizeImage() {
    const imageCount = 19;
    const publicIds = [];
    for (let i = 1; i <= imageCount; i++) {
      publicIds.push(`wizarding-world/hogwarts${i}`);
    }
    return publicIds;
  }

  getPaginatedHogwartsImages(page: number, pageSize: number) {
    const allImages = this.getAllHogwartsImages();
    const startIndex = page * pageSize;
    return allImages.slice(startIndex, startIndex + pageSize);
  }
}

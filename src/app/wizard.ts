export interface Wizard {
  id: number;
  name: string;
  house: string;
  wand: {
    wood: string;
    core: string;
    length: string;
  };
  bio: string;
}

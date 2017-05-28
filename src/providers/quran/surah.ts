import { Ayah } from './ayah';

export interface Surah {
  ayahs: Array<Ayah>,
  englishName: string,
  englishNameTranslation: string,
  name: string,
  number: number,
  revelationType: string
}

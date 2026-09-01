import { LawyerCityData } from './types';
import { tehranCityData } from './cities/tehran';
import { mashhadCityData, bojnurdCityData, birjandCityData } from './cities/khorasan';
import {
  isfahanCityData,
  qomCityData,
  arakCityData,
  semnanCityData,
  yazdCityData,
  qazvinCityData,
} from './cities/central';
import { rashtCityData, sariCityData, gorganCityData } from './cities/north';
import {
  tabrizCityData,
  urmiaCityData,
  ardabilCityData,
  zanjanCityData,
} from './cities/northwest';
import {
  kermanshahCityData,
  sanandajCityData,
  hamadanCityData,
  ilamCityData,
  khorramabadCityData,
} from './cities/west';
import {
  shirazCityData,
  ahvazCityData,
  bushehrCityData,
  bandarAbbasCityData,
  yasujCityData,
  shahrekordCityData,
  kermanCityData,
  zahedanCityData,
  karajCityData,
} from './cities/south';

export const ALL_LAWYER_CITIES: LawyerCityData[] = [
  tehranCityData,
  mashhadCityData,
  shirazCityData,
  isfahanCityData,
  tabrizCityData,
  karajCityData,
  qomCityData,
  ahvazCityData,
  kermanshahCityData,
  rashtCityData,
  zahedanCityData,
  kermanCityData,
  hamadanCityData,
  yazdCityData,
  arakCityData,
  urmiaCityData,
  ardabilCityData,
  bandarAbbasCityData,
  gorganCityData,
  sariCityData,
  semnanCityData,
  zanjanCityData,
  sanandajCityData,
  ilamCityData,
  bojnurdCityData,
  birjandCityData,
  bushehrCityData,
  yasujCityData,
  shahrekordCityData,
  qazvinCityData,
  khorramabadCityData,
];

export function getLawyerCityBySlug(slug: string): LawyerCityData | undefined {
  return ALL_LAWYER_CITIES.find((c) => c.slug === slug);
}

export function getAllLawyerCitySlugs(): string[] {
  return ALL_LAWYER_CITIES.map((c) => c.slug);
}

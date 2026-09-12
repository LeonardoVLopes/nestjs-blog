import { generateRandomSuffix } from './generate-random-suffix';
import { generateSlug } from './slug-generator';

export function createSlugFromText(text: string) {
  const slug = generateSlug(text);
  return `${slug}-${generateRandomSuffix()}`;
}

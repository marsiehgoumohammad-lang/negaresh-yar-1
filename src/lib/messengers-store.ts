import fs from 'fs';
import path from 'path';
import { MessengerConfig, DEFAULT_MESSENGERS } from './messengers-types';

export type { MessengerConfig };
export { DEFAULT_MESSENGERS };

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'messengers-config.json');

let inMemoryMessengers: MessengerConfig[] | null = null;

export function getMessengersConfig(): MessengerConfig[] {
  if (inMemoryMessengers && inMemoryMessengers.length > 0) {
    return inMemoryMessengers;
  }
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data) as MessengerConfig[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        const sorted = parsed.sort((a, b) => a.order - b.order);
        inMemoryMessengers = sorted;
        return sorted;
      }
    }
  } catch (err) {
    console.error('Error reading messengers config file:', err);
  }
  return DEFAULT_MESSENGERS;
}

export function saveMessengersConfig(config: MessengerConfig[]): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const sorted = [...config].sort((a, b) => a.order - b.order);
    inMemoryMessengers = sorted;
    fs.writeFileSync(FILE_PATH, JSON.stringify(sorted, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving messengers config file:', err);
    if (inMemoryMessengers) return true;
    return false;
  }
}

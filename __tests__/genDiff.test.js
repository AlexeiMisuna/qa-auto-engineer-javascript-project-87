import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('gendiff tests', () => {
  const fixtureDir = path.join(__dirname, '../__fixtures__');

  test('JSON files', () => {
    const file1 = path.join(fixtureDir, 'filepath1.json');
    const file2 = path.join(fixtureDir, 'filepath2.json');

    const expected = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

    expect(genDiff(file1, file2)).toBe(expected);
  });

  test('YAML files', () => {
    const file1 = path.join(fixtureDir, 'filepath1.yml');
    const file2 = path.join(fixtureDir, 'filepath2.yml');

    const expected = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

    expect(genDiff(file1, file2)).toBe(expected);
  });
});

import fs from 'fs'
import path from 'path'
import genDiff from '../src/index.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fixtures = path.join(__dirname, '..', '__fixtures__')

const readFixture = filename =>
  fs.readFileSync(path.join(fixtures, filename), 'utf-8').trim()

describe('gendiff', () => {
  test('JSON files', () => {
    const file1 = path.join(fixtures, 'file1.json')
    const file2 = path.join(fixtures, 'file2.json')

    expect(genDiff(file1, file2).trim()).toEqual(readFixture('expected_stylish.txt'))
    expect(genDiff(file1, file2, 'formatStylish').trim()).toEqual(readFixture('expected_stylish.txt'))
    expect(genDiff(file1, file2, 'plain').trim()).toEqual(readFixture('expected_plain.txt'))
    expect(genDiff(file1, file2, 'json').trim()).toEqual(readFixture('expected_json.txt'))
  })

  test('YAML files', () => {
    const file1 = path.join(fixtures, 'file1.yml')
    const file2 = path.join(fixtures, 'file2.yml')

    expect(genDiff(file1, file2).trim()).toEqual(readFixture('expected_stylish.txt'))
    expect(genDiff(file1, file2, 'formatStylish').trim()).toEqual(readFixture('expected_stylish.txt'))
    expect(genDiff(file1, file2, 'plain').trim()).toEqual(readFixture('expected_plain.txt'))
    expect(genDiff(file1, file2, 'json').trim()).toEqual(readFixture('expected_json.txt'))
  })
})

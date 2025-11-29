import path from 'path'
import genDiff from '../src/index.js'

const fixtures = path.join('.', '__fixtures__')

describe('genDiff', () => {
  describe('JSON files', () => {
    test('Частичное различие содержания файлов', () => {
      const file1 = path.join(fixtures, 'file1.json')
      const file2 = path.join(fixtures, 'file2.json')

      const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

      expect(genDiff(file1, file2)).toBe(expected)
    })

    test('Содержание файлов абсолютно идентично', () => {
      const file1 = path.join(fixtures, 'file1.json')
      const file2 = path.join(fixtures, 'file1.json')

      const expected = `{
    follow: false
    host: hexlet.io
    proxy: 123.234.53.22
    timeout: 50
}`

      expect(genDiff(file1, file2)).toBe(expected)
    })
  })

  describe('YAML files', () => {
    test('Частичное различие содержания файлов', () => {
      const file1 = path.join(fixtures, 'file1.yml')
      const file2 = path.join(fixtures, 'file2.yml')

      const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

      expect(genDiff(file1, file2)).toBe(expected)
    })

    test('Содержание файлов абсолютно идентично', () => {
      const file1 = path.join(fixtures, 'file1.yml')
      const file2 = path.join(fixtures, 'file1.yml')

      const expected = `{
    follow: false
    host: hexlet.io
    proxy: 123.234.53.22
    timeout: 50
}`

      expect(genDiff(file1, file2)).toBe(expected)
    })
  })
})

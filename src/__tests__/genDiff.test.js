import path from 'path'
import genDiff from '../index.js'

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
  describe('genDiff plain', () => {
    test('Плоский формат для yaml', () => {
      const file1 = path.join(fixtures, 'file1.yml')
      const file2 = path.join(fixtures, 'file2.yml')

      const expected = `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`

      expect(genDiff(file1, file2, 'plain')).toBe(expected)
    })
  })
  describe('gendiff json format', () => {
    test('gendiff json format', () => {
      const file1 = path.join(fixtures, 'file1.json')
      const file2 = path.join(fixtures, 'file2.json')

      const expected = JSON.stringify([
        { key: 'follow', type: 'removed', value: false },
        { key: 'host', type: 'unchanged', value: 'hexlet.io' },
        { key: 'proxy', type: 'removed', value: '123.234.53.22' },
        { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
        { key: 'verbose', type: 'added', value: true },
      ], null, 2)

      expect(genDiff(file1, file2, 'json')).toBe(expected)
    })
  })
})

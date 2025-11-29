import path from 'path'
import genDiff from '../index.js'

const fixtures = './__fixtures__'

describe('genDiff', () => {
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

  //   test('Содержание файлов абсолютно не идентично', () => {
  //     const fileA = path.join(fixtures, 'fileA.json') // { "a": 1 }
  //     const fileB = path.join(fixtures, 'fileB.json') // { "b": 2 }

  //     const expected = `{
  //   - a: 1
  //   + b: 2
  // }`

//     expect(genDiff(fileA, fileB)).toBe(expected)
//   })
})

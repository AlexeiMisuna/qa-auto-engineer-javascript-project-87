import _ from 'lodash'
import parseFile from './parser.js'

export default function genDiffFromFiles(filepath1, filepath2, format = 'stylish') {
  // Читаем и парсим файлы
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  // Сравниваем объекты
  const keys = _.sortBy([...new Set([...Object.keys(data1), ...Object.keys(data2)])])

  const diffLines = keys.flatMap((key) => {
    const val1 = data1[key]
    const val2 = data2[key]

    if (!Object.hasOwn(data1, key)) return [`  + ${key}: ${val2}`]
    if (!Object.hasOwn(data2, key)) return [`  - ${key}: ${val1}`]
    if (_.isEqual(val1, val2)) return [`    ${key}: ${val1}`]
    return [`  - ${key}: ${val1}`, `  + ${key}: ${val2}`]
  })

  return `{\n${diffLines.join('\n')}\n}`
}

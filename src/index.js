import { parseFile } from './parser.js'
import buildDiff from './diff.js'
import stylish from './formatters/stylish.js'
import plain from './formatters/plain.js'
import json from './formatters/json.js'

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)
  const diffTree = buildDiff(data1, data2)

  if (format === 'stylish') return stylish(diffTree)
  if (format === 'plain') return plain(diffTree)
  if (format === 'json') return json(diffTree)

  throw new Error(`Unknown format: ${format}`)
}

export default genDiff

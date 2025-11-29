import { parseFile } from './parser.js'
import buildDiff from './diff.js'
import stylish from './formatters/stylish.js'
import plain from './formatters/plain.js'

const formatters = {
  stylish,
  plain,
  json: diffTree => JSON.stringify(diffTree, null, 2),
}

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)
  const diffTree = buildDiff(data1, data2)

  const formatter = formatters[format]
  if (!formatter) throw new Error(`Unknown format: ${format}`)

  return formatter(diffTree)
}

export default genDiff

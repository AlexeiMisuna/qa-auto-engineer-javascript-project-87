import fs from 'fs'
import path from 'path'
import parseContent from './parser.js'
import buildDiff from './diff.js'
import getFormatter from './formatters/index.js'

const buildFullpath = filepath => path.resolve(process.cwd(), filepath)
const excludeFormat = filepath => path.extname(filepath).slice(1)

const readFile = (filepath) => {
  const content = fs.readFileSync(buildFullpath(filepath), 'utf-8')
  const format = excludeFormat(filepath)
  return parseContent(content, format)
}

const genDiff = (filepath1, filepath2, format = 'formatStylish') => {
  const data1 = readFile(filepath1)
  const data2 = readFile(filepath2)

  const diffData = buildDiff(data1, data2)

  const formatter = getFormatter(format)
  return formatter(diffData)
}

export default genDiff

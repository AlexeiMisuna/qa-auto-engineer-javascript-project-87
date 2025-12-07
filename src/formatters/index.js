import formatStylish from './stylish.js'
import formatPlain from './plain.js'

const formatters = {
  stylish: diffTree => formatStylish(diffTree),
  formatStylish: diffTree => formatStylish(diffTree),
  plain: diffTree => formatPlain(diffTree),
  json: diffTree => JSON.stringify(diffTree, null, 2),
}

const getFormatter = (diffTree, format) => {
  const formatter = formatters[format]
  if (!formatter) {
    throw new Error(`Unknown format: ${format}`)
  }
  return formatter(diffTree)
}

export default getFormatter

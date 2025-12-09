import stylish from './stylish.js'
import formatPlain from './plain.js'

const formatters = {
  stylish: diffTree => stylish(diffTree),
  plain: diffTree => formatPlain(diffTree),
  json: diffTree => JSON.stringify(diffTree, null, 2),
}

const formatDiff = (diffTree, format) => {
  const formatter = formatters[format]
  if (!formatter) {
    throw new Error(`Unknown format: ${format}`)
  }
  return formatter(diffTree)
}

export default formatDiff

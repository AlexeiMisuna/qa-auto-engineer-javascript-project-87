import formatStylish from './stylish.js'
import plain from './plain.js'

const getFormatter = (format) => {
  const formatters = {
    stylish: formatStylish,
    formatStylish,
    plain,
    json: diffTree => JSON.stringify(diffTree, null, 2),
  }

  const formatter = formatters[format]
  if (!formatter) {
    throw new Error(`Unknown format: ${format}`)
  }
  return formatter
}

export default getFormatter

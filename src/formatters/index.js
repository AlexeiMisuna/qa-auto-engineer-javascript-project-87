import stylish from './stylish.js'
import plain from './plain.js'

const formatters = {
  stylish,
  plain,
  json: diffTree => JSON.stringify(diffTree, null, 2),
}

export default formatters

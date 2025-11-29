const formatValue = (value) => {
  if (typeof value === 'string') return `'${value}'`
  if (value === null) return 'null'
  if (typeof value === 'object') return '[complex value]'
  return String(value)
}

const plain = (diffTree) => {
  const lines = diffTree.map((node) => {
    const property = node.key
    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.value)}`
      case 'removed':
        return `Property '${property}' was removed`
      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`
      case 'unchanged':
        return null
      default:
        return null
    }
  }).filter(Boolean)

  return lines.join('\n')
}

export default plain

const formatPlain = (data) => {
  const lines = data.flatMap((node) => {
    const { key, type, value, value1, value2 } = node

    switch (type) {
      case 'added':
        return `Property '${key}' was added with value: ${String(value)}`
      case 'removed':
        return `Property '${key}' was removed`
      case 'changed':
        return `Property '${key}' was updated. From ${String(value1)} to ${String(value2)}`
      case 'unchanged':
        return []
      default:
        return []
    }
  })

  return lines.join('\n')
}

export default formatPlain

const formatStylish = (data) => {
  const lines = data.map((node) => {
    const { type, key, value, value1, value2 } = node

    switch (type) {
      case 'added':
        return `  + ${key}: ${value}`

      case 'removed':
        return `  - ${key}: ${value}`

      case 'unchanged':
        return `    ${key}: ${value}`

      case 'changed': {
        const removedLine = `  - ${key}: ${value1}`
        const addedLine = `  + ${key}: ${value2}`
        return `${removedLine}\n${addedLine}`
      }

      default:
        return ''
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

export default formatStylish

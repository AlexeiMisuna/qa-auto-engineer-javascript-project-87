const formatStylish = (data) => {
  const lines = data.map((node) => {
    switch (node.type) {
      case 'added':
        return `  + ${node.key}: ${String(node.value)}`
      case 'removed':
        return `  - ${node.key}: ${String(node.value)}`
      case 'unchanged':
        return `    ${node.key}: ${String(node.value)}`
      case 'changed': {
        const removedLine = '  - ' + node.key + ': ' + String(node.value1)
        const addedLine = '  + ' + node.key + ': ' + String(node.value2)
        return removedLine + '\n' + addedLine
      }
    }
  })

  return '{\n' + lines.join('\n') + '\n}'
}

export default formatStylish

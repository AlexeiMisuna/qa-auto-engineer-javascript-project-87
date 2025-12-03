const formatStylish = (data) => {
  const lines = data.map((node) => {
    switch (node.type) {
      case 'added':
        return `  + ${node.key}: ${String(node.value)}`
      case 'removed':
        return `  - ${node.key}: ${String(node.value)}`
      case 'unchanged':
        return `    ${node.key}: ${String(node.value)}`
      case 'changed':
        return `  - ${node.key}: ${String(node.value1)}
  + ${node.key}: ${String(node.value2)}`
      default:
        return ''
    }
  })

  return `{
${lines.join('\n')}
}`
}

export default formatStylish

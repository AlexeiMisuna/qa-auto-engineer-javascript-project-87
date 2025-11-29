const stylish = (diffTree) => {
  const lines = diffTree.map((node) => {
    switch (node.type) {
      case 'added': return `  + ${node.key}: ${node.value}`
      case 'removed': return `  - ${node.key}: ${node.value}`
      case 'unchanged': return `    ${node.key}: ${node.value}`
      case 'changed':
        return `  - ${node.key}: ${node.oldValue}\n  + ${node.key}: ${node.newValue}`
      default: return ''
    }
  })
  return `{\n${lines.join('\n')}\n}`
}

export default stylish

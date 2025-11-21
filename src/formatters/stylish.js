const stylish = (diff) => {
  const lines = diff.flatMap((node) => {
    switch (node.type) {
    case 'removed':
      return [`- ${node.key}: ${node.value}`]
    case 'added':
      return [`+ ${node.key}: ${node.value}`]
    case 'changed':
      return [`- ${node.key}: ${node.oldValue}`, `+ ${node.key}: ${node.newValue}`]
    case 'unchanged':
      return [`  ${node.key}: ${node.value}`]
    default:
      return []
    }
  })
  return ['{', ...lines, '}'].join('\n')
}

export default stylish

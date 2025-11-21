const indent = (depth, spaces = 4) => " ".repeat(depth * spaces - 2)
const bracketIndent = (depth, spaces = 4) => " ".repeat((depth - 1) * spaces)

const formatValue = (value, depth) => {
  if (typeof value !== "object" || value === null) {
    return `${value}`
  }

  const entries = Object.entries(value)
    .map(([key, val]) => `${indent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`)

  return `{\n${entries.join("\n")}\n${bracketIndent(depth)}}`
}

const stylish = (tree) => {
  const iter = (node, depth) =>
    node.map((item) => {
      switch (item.type) {
      case "added":
        return `${indent(depth)}+ ${item.key}: ${formatValue(item.value, depth)}`

      case "removed":
        return `${indent(depth)}- ${item.key}: ${formatValue(item.value, depth)}`

      case "unchanged":
        return `${indent(depth)}  ${item.key}: ${formatValue(item.value, depth)}`

      case "changed":
        return `  - ${item.key}: ${item.oldValue}\n  + ${item.key}: ${item.newValue}`

      case "updated":
        return [
          `${indent(depth)}- ${item.key}: ${formatValue(item.value1, depth)}`,
          `${indent(depth)}+ ${item.key}: ${formatValue(item.value2, depth)}`
        ].join("\n")

      case "nested":
        return `${indent(depth)}  ${item.key}: {\n${iter(item.children, depth + 1)}\n${bracketIndent(depth)}  }`

      default:
        throw new Error(`Unknown type: ${item.type}`)
      }
    }).join("\n")

  return `{\n${iter(tree, 1)}\n}`
}

export default stylish

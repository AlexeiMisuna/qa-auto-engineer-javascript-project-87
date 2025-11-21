const plain = diff => diff.map(node => {
  switch (node.type) {
    case 'removed':
      return `Property '${node.key}' was removed`;
    case 'added':
      return `Property '${node.key}' was added with value: ${node.value}`;
    case 'changed':
      return `Property '${node.key}' was updated. From ${node.oldValue} to ${node.newValue}`;
    default:
      return '';
  }
}).filter(Boolean).join('\n');

export default plain;

const buildDiff = (obj1, obj2) => {
  // объединяем ключи обоих объектов, убираем дубликаты и сортируем по алфавиту
  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)])).sort((a, b) => a.localeCompare(b))

  const diffTree = keys.map((key) => {
    if (!(key in obj1)) {
      return { key, type: 'added', value: obj2[key] }
    }
    if (!(key in obj2)) {
      return { key, type: 'removed', value: obj1[key] }
    }
    if (obj1[key] !== obj2[key]) {
      return { key, type: 'changed', oldValue: obj1[key], newValue: obj2[key] }
    }
    return { key, type: 'unchanged', value: obj1[key] }
  })

  return diffTree
}

export default buildDiff

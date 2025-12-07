if (!Object.has) {
  Object.has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)
}

const buildDiff = (data1, data2) => {
  const allKeys = [
    ...Object.keys(data1),
    ...Object.keys(data2),
  ]
  const uniqueKeys = Array.from(new Set(allKeys))
  const keys = uniqueKeys.sort((a, b) => a.localeCompare(b))

  const data = keys.map((key) => {
    const hasData1 = Object.has(data1, key)
    const hasData2 = Object.has(data2, key)

    if (!hasData1) {
      const value2 = data2[key]
      return { key, type: 'added', value: value2 }
    }

    if (!hasData2) {
      const value1 = data1[key]
      return { key, type: 'removed', value: value1 }
    }

    const value1 = data1[key]
    const value2 = data2[key]

    if (value1 !== value2) {
      return { key, type: 'changed', value1, value2 }
    }

    return { key, type: 'unchanged', value: value1 }
  })

  return data
}

export default buildDiff

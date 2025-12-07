import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
}

const parseContent = (content, format) => {
  const parser = parsers[format]
  if (!parser) {
    throw new Error(`Unsupported file format: ${format}`)
  }
  return parser(content)
}

export default parseContent

import fs from "fs"
import path from "path"
import yaml from "js-yaml"

const parse = (data, ext) => {
  switch (ext) {
  case ".json":
    return JSON.parse(data)
  case ".yml":
  case ".yaml":
    return yaml.load(data)
  default:
    throw new Error(`Unsupported file format: ${ext}`)
  }
}

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(absolutePath, "utf-8")
  const ext = path.extname(filepath).toLowerCase()
  return parse(data, ext)
}

export default parseFile

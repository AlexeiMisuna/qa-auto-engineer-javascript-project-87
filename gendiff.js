#!/usr/bin/env node
import { Command } from 'commander'
import parseFile from './src/parser.js'
import genDiff from './src/index.js'

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'display usage information')
  .argument('<filepath1>', 'first file')
  .argument('<filepath2>', 'second file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const data1 = parseFile(filepath1)
    const data2 = parseFile(filepath2)
    const diff = genDiff(data1, data2, options.format)
    console.log(diff)
  })

program.parse(process.argv)

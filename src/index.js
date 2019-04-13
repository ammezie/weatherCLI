'use strict'

const program = require('commander')
const { fetchNow, weatherForecast } = require('./commands')

program.version('1.0.0').description('Command line Weather Application')

program
  .command('now <city>')
  .alias('n')
  .description('see the current weather in the specified city')
  .action(city => fetchNow(city))

program
  .command('forecast <city>')
  .alias('f')
  .description('see the weather forcast of a specified city')
  .action(city => weatherForecast(city))

program.parse(process.argv)

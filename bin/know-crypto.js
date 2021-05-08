#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key', 'Manage API key using https://nomics.com')
    .command('check', 'Check coin price info')
    .parse(process.argv)

// console.log("Welcome to know-crypto🤝")
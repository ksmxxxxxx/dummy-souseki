#!/usr/bin/env node

import { Command } from 'commander'
import DummySouseki from '../lib/dummySouseki.js'
import CopyToClipboard from './copyToClipboard.js'
import getVersion from './getVersion.js'

const program = new Command()

program
  .name('dummy-souseki')
  .version(getVersion(), '-v, --version', 'Output the current version')
  .option('-p, --paragraphs <number>', 'Specifies the number of paragraph')
  .option('-c, --copy', 'Copy to clipboard with dummy text')
  .parse()

class Cli {
  constructor () {
    this.dummySouseki = new DummySouseki()
    this.clipboard = new CopyToClipboard()
    this.options = program.opts()
    this.isCopy = this.options.copy
    this.isParagraphs = Object.hasOwnProperty.call(this.options, 'paragraphs') === true
  }

  run () {
    let paragraph
    if (this.isParagraphs) {
      const num = parseInt(this.options.paragraphs)
      paragraph = this.dummySouseki.multipleParagraphs(num)
    } else {
      paragraph = this.dummySouseki.singlePragraph()
    }
    console.log(paragraph)
    if (this.isCopy) {
      this.clipboard.copy(paragraph)
    }
  }
}

new Cli().run()

#!/usr/bin/env node

import { Command } from 'commander'
import { KOKORO } from '../data/kokoro.js'
import DummySouseki from '../lib/dummySouseki.js'
import Random from '../lib/random.js'
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
    this.data = KOKORO
    this.dataLength = this.data.length
    this.dummySouseki = new DummySouseki()
    this.random = new Random()
    this.clipboard = new CopyToClipboard()
    this.options = program.opts()
    this.isCopy = this.options.copy
    this.isParagraphs = Object.hasOwnProperty.call(this.options, 'paragraphs') === true
  }

  run () {
    const ramdomNum = this.random.num(this.dataLength)
    let paragraph
    if (this.isParagraphs) {
      const paragraphNum = parseInt(this.options.paragraphs)
      paragraph = this.dummySouseki.multipleParagraphs(ramdomNum, paragraphNum)
    } else {
      paragraph = this.dummySouseki.singlePragraph(ramdomNum)
    }
    process.stdout.write(paragraph)
    if (this.isCopy) {
      this.clipboard.copy(paragraph)
    }
  }
}

new Cli().run()

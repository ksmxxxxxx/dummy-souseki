import { exec } from 'child_process'
import { kokoro } from '../data/kokoro.js'

const textData = kokoro

const dataLength = textData.length

const specifyParagraphs = 6

function chooseRandomParagraph(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const randomNum = chooseRandomParagraph(dataLength)

function multipleParagraphs (num) {
  return textData.slice(randomNum, randomNum + num).join('\n')
}

const whichPlatform = process.platform

// Try test
// const whichPlatform = 'linux'

const SUPPORT_PLATFORM = {
  DARWIN: 'darwin',
  LINUX: 'linux',
  WIN32: 'win32'
}

const COPY_COMMAND = {
  DARWIN: 'pbcopy'
}

function copyCommand () {
  const err = new Error('Does not support platform')
  switch (whichPlatform) {
    case SUPPORT_PLATFORM.WIN32.toLowerCase():
    case SUPPORT_PLATFORM.LINUX.toLowerCase():
      throw err
    case SUPPORT_PLATFORM.DARWIN.toLowerCase():
    default:
      return COPY_COMMAND.DARWIN
  }
}

function copyToClipboad (text) {
  const command = `echo '${text}' | ${copyCommand()}`
  exec(command)
  console.log('Copied!')
}

copyCommand()
// copyToClipboad(multipleParagraphs(specifyParagraphs))

// if (whichPlatform === supportPlatform["MACOS"]) {
//   console.log('macos')
// } else {
//   console.log('other')
// }

// console.log(textData[randomNum])
// console.log('========================')
// console.log(multipleParagraphs(specifyParagraphs))
// dummy-souseki -c -p [paragraph num]

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

// console.log(textData[randomNum])
// console.log('========================')
// console.log(multipleParagraphs(specifyParagraphs))

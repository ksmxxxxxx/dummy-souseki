import { KOKORO } from '../data/kokoro.js'

const DATA = KOKORO
const dataLength = DATA.length

class DummySouseki {
  chooseRandomParagraph (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  singlePragraph () {
    const randomNum = this.chooseRandomParagraph(dataLength)
    return `${DATA[randomNum]}`
  }

  multipleParagraphs (num) {
    const randomNum = this.chooseRandomParagraph(dataLength)
    return DATA.slice(randomNum, randomNum + num).join('\n')
  }
}

export default DummySouseki

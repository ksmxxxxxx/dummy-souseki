import Random from './random.js'
import { KOKORO } from '../data/kokoro.js'

const DATA = KOKORO

class DummySouseki {
  constructor () {
    this.random = new Random()
  }

  singlePragraph (randomNum) {
    return `${DATA[randomNum]}`
  }

  multipleParagraphs (randomNum, paragraphNum) {
    return DATA.slice(randomNum, randomNum + paragraphNum).join('\n')
  }
}

export default DummySouseki

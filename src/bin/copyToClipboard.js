import { exec } from 'child_process'
import { SUPPORT_PLATFORM } from './supportedPlatforms.js'
import { COPY_COMMAND } from './copyCommand.js'

const whichPlatform = process.platform

class CopyToClipboad {
  command () {
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

  copy (text) {
    const command = `echo '${text}' | ${this.command()}`
    exec(command)
    process.stdout.write('\n📋  Copied!\n')
  }
}

export default CopyToClipboad

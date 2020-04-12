import config from 'config'
import crypto from 'crypto'

const salt = Buffer.from(config.get('security.saltKey'))
const iteration = 92999
const encryptKey = config.get('security.encryptKey') as string

exports.crypt = {
  hash(data: string) {
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(data, salt, iteration, 64, 'sha512', (pbkdf2Err, key) => {
        if (pbkdf2Err) {
          const errorMessage = `There is error in crypt because ${pbkdf2Err}`
          reject(errorMessage)
        }
        const hash = key.toString('base64')
        resolve(hash)
      })
      // crypto.randomBytes(64, (err, buf) => {});
    })
  },
  compare(data: string, hashData: string) {
    return new Promise((resolve) => {
      crypto.pbkdf2(data, salt, iteration, 64, 'sha512', (pbkdf2Err, key) => {
        if (pbkdf2Err) {
          throw new Error(`There is error in crypt because ${pbkdf2Err}`)
        }
        const hash = key.toString('base64')
        resolve(hash === hashData)
      })
    })
  },
  encrypt(password: string) {
    const cipher = crypto.createCipheriv('aes-256-cbc', encryptKey, null)
    return cipher.update(password, 'utf8', 'base64') + cipher.final('base64')
  },
  decrypt(data: string) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', encryptKey, null)
    return decipher.update(data, 'base64', 'utf8') + decipher.final('utf8')
  },
}

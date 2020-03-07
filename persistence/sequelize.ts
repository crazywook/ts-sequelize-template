import { Sequelize } from 'sequelize-typescript'
import cls from 'continuation-local-storage'

const rootPath = process.cwd()
let modelCount = 0

export const sequelize =  new Sequelize({

  database: 'temp',
  dialect: 'mysql',
  username: 'root',
  password: 'qweR12#$',
  models: [rootPath + '/database/**/*.ts'],
  modelMatch: (filename, member) => {

    if (filename === 'index') {
      return false
    }

    console.log('modelMatch start', filename, '/', member)

    if (filename === member || filename.split('.')[0] === member) {

      modelCount ++
      return true
    }
    return false
  }
})

console.log(`Total ${modelCount} models was created`)

sequelize.authenticate().then(() => {
  process.stdout.write('Connection has been established successfully.')
}).catch((error: Error) => {
  process.stdout.write(`Unable to connect to the database: ${error}`)
})

const TRANSACTION_NAMESPACE = 'sequelize-transaction'
const namespace = cls.createNamespace(TRANSACTION_NAMESPACE)

sequelize.Sequelize.useCLS(namespace)

export function transaction(fn: () => Promise<any>, options = { propagation: 'REQUIRED' }) {

  try {

      if(options.propagation != 'REQUIRED' ) {
        return sequelize.transaction(() => fn())
      }

      const tx = cls.getNamespace(TRANSACTION_NAMESPACE).get('transaction')
      return tx ? fn() : sequelize.transaction(() => fn())
  } catch(e) {

    return e
  }
}

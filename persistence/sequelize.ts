import { Sequelize } from 'sequelize-typescript'

const rootPath = process.cwd()

const sequelize =  new Sequelize({

  database: 'temp',
  dialect: 'mysql',
  username: 'root',
  password: 'qweR12#$',
  models: [rootPath + '/models/**/*.ts'],
  modelMatch: (filename, member) => {
    console.log('member', member)
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
  },
})

export { sequelize }

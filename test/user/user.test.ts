import { expect } from 'chai'
import { UserRepository } from '../../models/user/user'
import { sequelize } from '../../persistence/sequelize'
// const { user } = require('../../test/knex');

describe('user.test', () => {

  before('before', () => {
    
  })

  after('after', () => {
    sequelize.close()
  })
  it('when test', async () => {
    const users = await new UserRepository().retrieveUser()
    const hobby = users[0].hobbies.map(d => d.toJSON())
    console.log('users', hobby)
    expect(hobby).to.instanceOf(Array)
  })
})

// import '../../persistence/sequelize'
import { sequelize } from '../../persistence/sequelize'
import { userRepository } from './../../repository/user/index'
import { expect } from 'chai'

describe('user.test', () => {

  beforeEach('before', async () => {
    console.log('before test')
  })

  after('after', () => {
    console.log('after test')
    sequelize.close()
  })

  it('when test', async () => {

    const users = await userRepository.retrieveUser()
    const hobby = users[0].hobbies.map(d => d.toJSON())
    console.log('users', hobby)
    expect(hobby).to.instanceOf(Array)
  })
})

// mocha -r ts-node/register user.test.ts

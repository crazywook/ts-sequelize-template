import { expect } from 'chai'
import { sequelize, transaction } from '../../persistence/sequelize'
import { userRepository } from './../../repository/user/index'
import { User } from './../../repository/user/types'

describe('createUserHobbyTransaction.test', () => {

  before('before', () => {

  })

  after('after', () => {

    sequelize.close()
  })

  it('When on transacting to create user error was thrown, creating user is rollbacked', async () => {

    await transaction(async () => {
      console.log('transaction start')
      const mimi: User = {
        name: 'mimi',
        birthday: new Date('1979-10-10'),
      }

      await userRepository.createUser(mimi)
      throw new Error('test transaction')

    }).catch((e: Error) => e)

    const mimi = await userRepository.retrieveOneByName('mimi')
    expect(mimi).to.be.null
  })
})

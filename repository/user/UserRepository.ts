import { User } from './../../database/User'
import { Hobby } from '../../database/Hobby'

export class UserRepository {

  constructor(
    readonly model: typeof User
  ) {}

  retrieveUser() {
    return this.model.findAll({
      include: [Hobby]
    })
  }

  retrieveOneByName(name: string) {
    return this.model.findOne({
      include: [Hobby],
      where: {
        name
      }
    })
  }

  createUser(user: any) {

    return this.model.create(user)
  }
}

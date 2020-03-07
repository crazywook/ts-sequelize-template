import { UserRepository } from './UserRepository'
import { User } from './../../database/User'

export const userRepository = new UserRepository(User)
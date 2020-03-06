import { Table, Column, Model as TModel, HasMany } from 'sequelize-typescript'
// import { Model } from 'sequelize'
import Hobby from '../hobby/hobby'

@Table({
  tableName: 'user',
  freezeTableName: false,
  timestamps: false,
})
export default class User extends TModel<User> {
 
  @Column
  name!: string;
 
  @Column
  birthday!: Date;
 
  @HasMany(() => Hobby)
  hobbies!: Hobby[];
}

export class UserRepository {

  retrieveUser() {
    return User.findAll({
      include: [Hobby]
    })
  }
}

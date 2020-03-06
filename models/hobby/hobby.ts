import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'

import User from '../user/user'

@Table({
  tableName: 'hobby',
  freezeTableName: false,
  timestamps: false,
})
export default class Hobby extends Model<Hobby> {
 
  @Column
  name!: string
 
  @BelongsTo(() => User)
  user!: typeof User

  @ForeignKey(() => User)
  userId!: number
}

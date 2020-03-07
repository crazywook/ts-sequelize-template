import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { Hobby } from './Hobby'

@Table({
  tableName: 'user',
  freezeTableName: false,
  timestamps: false,
})
export class User extends Model<User> {
 
  @Column
  name!: string;
 
  @Column
  birthday!: Date;
 
  @HasMany(() => Hobby)
  hobbies!: Hobby[];
}

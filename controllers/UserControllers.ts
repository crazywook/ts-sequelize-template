import { Param, Body, Get, Post, Put, Delete, JsonController } from "routing-controllers"
import Joi from '@hapi/joi'

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  waitingNum: Joi.number(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  repeat_password: Joi.ref('password'),
  access_token: [
    Joi.string(),
    Joi.number()
  ],
  birth_year: Joi.number()
    .integer()
    .min(1900)
    .max(2013),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

@JsonController()
export class UserController {

  @Get('/users')
  'get user'() {
    return { message: 'This action returns all users' }
  }

  @Get('/users/:id')
  'get unique user'(@Param('id') id: number) {
    return 'This action returns user #' + id
  }

  @Post('/users')
  async 'create users'(@Body() user: any) {

    await schema.validateAsync(user, {
      allowUnknown: true,
      convert: false
    })
    return 'Saving user...'
  }

  @Put('/users/:id')
  'modify user'(@Param('id') id: number, @Body() user: any) {
    console.log({ id, user })
    return 'Updating a user...'
  }

  @Delete('/users/:id')
  'remove user'(@Param('id') id: number) {
    console.log({ id })
    return 'Removing user...'
  }

}

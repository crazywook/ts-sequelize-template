import { Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined } from "routing-controllers"

@JsonController()
export class UserController {

  @OnUndefined(404)
  @Get('/users')
  'get user'() {
      return { message: 'This action returns all users' }
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
      return 'This action returns user #' + id
  }

  @Post('/users')
  post(@Body() user: any) {
      return 'Saving user...'
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
      return 'Updating a user...'
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
      return 'Removing user...'
  }

}

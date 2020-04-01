import { Response, Request } from 'express'
import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers"
import createHttpError from 'http-errors'

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

  error(err: any, _req: Request, res: Response) {
      
    const isProduction = process.env.NODE_ENV === 'production'
    console.log(`error`, err)
    console.log(`instance error`, err instanceof Error)
    res.status(500)
      .json(isProduction
        ? createHttpError(500)
        : {
          rc: 'I00001',
          reason: err.message
        }
      )
      .end()
  }
}
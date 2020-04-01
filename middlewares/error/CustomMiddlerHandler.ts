import { Response } from 'express'
import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers"

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

    error(err: any, req: any, res: Response, next: (err?: any) => any) {
        console.log("do something...", err)
        res.status(500)
        res.end()
        // next(err)
    }
}
// import { UserController } from './controllers/UserControllers'
import 'reflect-metadata'
import { useExpressServer, RoutingControllersOptions } from 'routing-controllers'
// import createError from 'http-errors'
import express, {
  // NextFunction,
  Response,
  // Request 
} from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import nunjucks from 'nunjucks'
// import { getCors } from './config/routingControllers'
import { getCors } from './config/cors'
import { CustomErrorHandler } from './middlewares/error/CustomMiddlerHandler'

// const isProduction =  process.env.NODE_ENV === 'production'

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'nunjucks')
nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(logger('dev'))
app.use(getCors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

const routingControllersOption: RoutingControllersOptions = {
  routePrefix: 'api',
  controllers: [__dirname + "/controllers/*.ts"],
  middlewares: [
    CustomErrorHandler,
  ],
  defaultErrorHandler: false,
}
useExpressServer(app, routingControllersOption)
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404))
// })

// // error handler
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.log('url', req.url)
//   console.log('err.message', err.message)
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   // res.render('error.html')
// })

export default app

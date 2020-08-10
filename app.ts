import 'reflect-metadata'
import { useExpressServer, RoutingControllersOptions } from 'routing-controllers'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import nunjucks from 'nunjucks'
import { getCors } from './config/cors'
import { CustomErrorHandler } from './middlewares/error/CustomErrorHandler'
import { authorizationChecker } from './middlewares/auth/checkRole'

// const isProduction =  process.env.NODE_ENV === 'production'

const app = express()

// security
app.use(helmet())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', nunjucks)
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
  authorizationChecker,
  defaultErrorHandler: false,
}
useExpressServer(app, routingControllersOption)

export default app

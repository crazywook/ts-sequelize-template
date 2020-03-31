"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const UserControllers_1 = require("./controllers/UserControllers");
// import createError from 'http-errors'
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const controllers_1 = __importDefault(require("./controllers"));
// const isProduction =  process.env.NODE_ENV === 'production'
const app = express_1.default();
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks_1.default.configure('views', {
    autoescape: true,
    express: app
});
app.use(morgan_1.default('dev'));
console.log('static path', path_1.default.join(__dirname, 'public'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', controllers_1.default);
routing_controllers_1.useExpressServer(app, {
    controllers: [
        UserControllers_1.UserController,
    ],
});
// routing-controllers 와 겹쳐서 충돌난다.
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(cookie_parser_1.default());
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
exports.default = app;
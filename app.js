const Koa = require('koa')
const webSocketService = require('./service/web_socket_service')

const app = new Koa()

const respDurationMiddleware = require('./middleware/koa_response_duration')
const respHeaderMiddleware = require('./middleware/koa_response_header')
const respDataMiddleware = require('./middleware/koa_response_data')


app.use(respDurationMiddleware)

app.use(respHeaderMiddleware)

app.use(respDataMiddleware)

app.listen(857, () => {
  console.log('正在监听:857 端口')
})

// 监听
webSocketService.listen()
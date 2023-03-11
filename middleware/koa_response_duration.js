// 总耗时中间件

module.exports = async (ctx, next) => {
  // 记录开始时间
  const start = Date.now()
  await next()
  // 记录结束时间
  const end = Date.now()

  const duration = end - start
  ctx.set('X-Response-Time', duration + 'ms')
}
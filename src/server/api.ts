import Router from "koa-router"

export const apiRouter = new Router()

apiRouter.get("/", async (ctx) => {
  ctx.body = ""
})

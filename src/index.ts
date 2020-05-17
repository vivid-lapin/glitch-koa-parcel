import Parcel from "parcel-bundler"
import Koa from "koa"
import Router from "koa-router"
import KoaStaticServer from "koa-static-server"

import { apiRouter } from "./server/api"

const main = async () => {
  const start = new Date().getTime()
  const port = process.env.PORT || "5000"
  const isProduction = process.env.NODE_ENV === "production"

  if (!isProduction) {
    const bundler = new Parcel("./src/frontend/index.html", {
      outDir: "./.data/public",
    })
    await bundler.bundle()
  }

  const app = new Koa()
  const router = new Router()
  router.use("/api", apiRouter.routes())
  app.use(
    KoaStaticServer({
      rootDir: "./.data/public",
      notFoundFile: "index.html",
      last: false,
    })
  )
  app.use(router.routes())

  app.listen(port, () => {
    console.log(
      `live on http://localhost:${port} (${new Date().getTime() - start}ms)`
    )
  })
}
main()

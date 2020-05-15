import Parcel from "parcel-bundler"
import Koa from "koa"
import Router from "koa-router"
import KoaStaticServer from "koa-static-server"
import fs from "fs"
import { promisify } from "util"
const exists = promisify(fs.exists)
import { apiRouter } from "./server/api"

const main = async () => {
  const port = process.env.PORT || "5000"
  const isProduction = process.env.NODE_ENV === "production"

  const publicIsExists = await exists("./public")

  if (!isProduction || !publicIsExists) {
    const bundler = new Parcel("./src/frontend/index.html", {
      outDir: "./public",
    })
    await bundler.bundle()
  }

  const app = new Koa()
  const router = new Router()
  router.use("/api", apiRouter.routes())
  app.use(
    KoaStaticServer({
      rootDir: "./public",
      notFoundFile: "index.html",
      last: false,
    })
  )
  app.use(router.routes())

  app.listen(port, () => {
    console.log(`live on http://localhost:${port}`)
  })
}
main()

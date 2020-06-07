import React from "react"
import ReactDOM from "react-dom"

const App: React.FC<{}> = () => {
  return (
    <div className="min-h-screen w-full flex flex-col text-gray-800">
      <div className="container max-w-screen-md mx-auto">
        <div className="my-2">
          <h1 className="text-3xl my-2">Glitch + Koa + Parcel!</h1>

          <div className="my-2">
            <a href="https://glitch.com/edit/?utm_content=project_glitch-koa-parcel&utm_source=view_source&utm_medium=button&utm_campaign=glitchButton#!/glitch-koa-parcel">
              <img
                src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fview-source%402x.png?1513093958802"
                alt="view source"
                width="133px"
              />
            </a>
          </div>
          <a
            className="text-blue-500"
            href="https://github.com/ci7lus/glitch-koa-parcel"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

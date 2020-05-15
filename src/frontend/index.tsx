import React from "react"
import ReactDOM from "react-dom"

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Glitch + Koa + Parcel!</h1>
      <a href="https://github.com/ci7lus/glitch-koa-parcel">GitHub</a>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

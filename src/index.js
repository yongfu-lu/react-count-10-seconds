import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const second = new Date().getSeconds()
ReactDOM.render(

  <App second={second} />,

  document.getElementById('root')
)
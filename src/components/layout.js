import React from "react"

const Layout = props => (
  <main className={"home" + (props.location.pathname === "/cv" ? " cv" : " ")}>
    {props.children}
  </main>
)

export default Layout

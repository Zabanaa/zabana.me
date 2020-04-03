import React from "react"

const Layout = ({ children }) => (
  <main className={"home" + (window.location.pathname === "/cv" ? " cv" : " ")}>
    {children}
  </main>
)

export default Layout

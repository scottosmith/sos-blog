import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const onRootPath = location.pathname === rootPath

  if (onRootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  const width = onRootPath ? rhythm(25) : rhythm(60) ;
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: width,
        padding: `${rhythm(1.5)} ${rhythm(2)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}{` `}
        <div className="footer-links">
            <a href="https://scottosmith.net" rel="noreferrer" className="link" target="_blank">me</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Menu from './Menu';

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Menu />
      <div>
        <main>{children}</main>
        <footer style={{bottom: '0px', width: '100%'}}>
          <p style={{textAlign: 'center'}}>
          © {new Date().getFullYear()}, Built by Zidane
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

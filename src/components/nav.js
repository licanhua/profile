import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  navContainer
} from './nav.module.css'

const Nav = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={navContainer}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <a href="https://licanhua.github.io/" className={navLinkText}>
              Blogs
            </a>
          </li>
          <li className={navLinkItem}>
            <Link to="https://licanhua.github.io/github-projects/docs" className={navLinkText}>
              My GitHub Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Profile
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="https://www.linkedin.com/in/licanhua/" className={navLinkText}>
              Linkedin
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Nav
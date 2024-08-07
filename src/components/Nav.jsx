import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
      <div>
          <nav>
              <ul>
                  <li>
                <Link to="/">Home</Link>
                  </li>
                  <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <div>
              <Outlet />
          </div>
    </div>
  )
}

export default Nav
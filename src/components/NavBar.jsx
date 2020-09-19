import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default function NavBar() {
  return (
    <Menu secondary>
        <Link to="/">
          <Menu.Item name='home' />
        </Link>
        <Link to="/businesses">
          <Menu.Item name='businesses' />
        </Link>
        <Link to="/post">
          <Menu.Item name='Post Your Business' />
        </Link>
      </Menu>
  )
}
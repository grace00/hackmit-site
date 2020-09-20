import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Container } from 'semantic-ui-react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="nav-background">
      <Container className="nav-bar">
        <Menu secondary>
          <Link to="/">
            <div className="logo">
              Beeyond
        </div>
          </Link>
          <Menu.Menu position='right'>
            <Link to="/businesses">
              <div className="nav-button">Businesses</div>
            </Link>
            <Link to="/post">
              <div className="nav-button outlined">Post your business</div>
            </Link>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  )
}
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import '../styles/navbar.css'

const Navbar = props => {
  const {handleClick, isLoggedIn} = props
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <Link className="home" to="/">
            TreeBeCa
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="navbar-right">
            <a href="#" onClick={() => handleClick(props)}>
              Logout
            </a>
            <Link to="/cart">Cart</Link>
          </div>
        ) : (
          <div className="navbar-right">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">Cart</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

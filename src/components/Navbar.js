import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">RECIPE</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/github">GITHUB</NavLink>
      <NavLink to="/logout">LOGOUT</NavLink>     
    </div>
  )
}
export default Navbar;
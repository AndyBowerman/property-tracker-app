import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({toggleConfirmation}) => {
  return (
    <ul>
        <Link to="/home"><li>Home</li></Link>
        <li>For Sale</li>
        <li>For Rent</li>
        <li>Sold / Rented Properties</li>
        <li>Removed Properties</li>
        <li onClick={toggleConfirmation}>Logout</li>
    </ul>
  )
}

export default Nav

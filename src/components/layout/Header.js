import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/quotes'}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add-quote'}> Add New Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
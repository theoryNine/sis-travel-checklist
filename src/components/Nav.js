import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <ul>
                    <Link to={`/`}><li>At Home</li></Link>
                    <Link to={`/airport`}><li>At The Airport</li></Link>
                </ul>
            </div>
        )
    }
}

export default Nav

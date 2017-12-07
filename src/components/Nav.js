import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={`/`}>At Home</Link></li>
                    <li><Link to={`/airport`}>At The Airport</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav

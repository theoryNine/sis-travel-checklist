import React from 'react'

class ListItem extends React.Component {
    render() {
        return (
            <li className='list-item'>{ this.props.contents }</li>
        )
    }
}

export default ListItem

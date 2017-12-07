import React from 'react'

class ListItem extends React.Component {
    render() {
        return (
            <li>{ this.props.contents }</li>
        )
    }
}

export default ListItem

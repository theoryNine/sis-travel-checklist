import React from 'react'
import ListItem from './ListItem'

class ItemList extends React.Component {
    render() {
        return (
            <div className='item-list'>
                {this.props.list.map(function (listValue) {
                    return <ListItem key={ listValue } contents={ listValue } />
                })}
            </div>
        )
    }
}

export default ItemList

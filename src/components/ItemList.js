import React from 'react'
import ListItem from './ListItem'
import shortid from 'shortid'

class ItemList extends React.Component {
    render() {
        return (
            <ul className='item-list'>
                {this.props.list.map(function (listValue) {
                    return <ListItem key={shortid.generate()} contents={ listValue } />
                })}
            </ul>
        )
    }
}

export default ItemList

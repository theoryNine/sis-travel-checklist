import React from 'react'
import shortid from 'shortid'
import ListItem from './ListItem'

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

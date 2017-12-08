import React from 'react'
import TextSection from './TextSection'
import ItemList from './ItemList'

class HomeList extends React.Component {
    render() {
        const listContents = [
            'Home',
            'List'
        ]
        return (
            <div>
                <TextSection contents='Some Stuff At the Airport' />
                <ItemList list={listContents} />
            </div>
        )
    }
}

export default HomeList

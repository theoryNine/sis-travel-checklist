import React from 'react'
import ItemList from './ItemList'
import TextSection from './TextSection'

class AirportList extends React.Component {
    render() {
        const list = [
            'Hello',
            'Again'
        ]
        return (
            <div>
                <TextSection contents='Some Stuff At the Airport' />
                <ItemList list={list} />
            </div>
        )
    }
}

export default AirportList

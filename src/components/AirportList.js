import React from 'react'
import ItemList from './ItemList'
import TextSection from './TextSection'

class AirportList extends React.Component {
    render() {
        const list = [
            "At the airport, leave your checked bags with the Alaska desk",
            "Buy snacks BEFORE you get on the plane, but not before you go through security",
            "If you want to buy anything on the plane, you have to have a card to pay"
        ]
        return (
            <div className='page-list'>
                <div className='list-container'>
                    <TextSection contents='Some Stuff At the Airport' />
                    <ItemList list={list} />
                </div>
            </div>
        )
    }
}

export default AirportList

import React from 'react'
import ItemList from './ItemList'
import TextSection from './TextSection'

class AirportList extends React.Component {
    render() {
        const list = [
            "When you get to the airport, go to the Alaska desk with your confirmations. They'll print off your boarding passes.",
            "Leave your big bags with the Alaska desk. You'll need $25 for each bag.",
            "Go to the security line next.",
            "Use the plastic bins - take off your shoes, put them in a plastic bin, along with everything in your pockets, and jewelry or belts you're wearing.",
            "If you have a laptop or tablet with you put it in a plastic bin on its own.",
            "Next, go buy snacks before you get on the plane.",
            "Your boarding pass should have a 'boarding time' listed on it. Be sure to be at your gate by then so you don't miss your flight!",
            "Your boarding pass has a 'Group' on it. Listen for them to call your group number, that's when you go get in line to board.",
            "Find your seats, put your bags under the seats in front of you, and have a great flight!"        ]
        return (
            <div className='page-list'>
                <div className='list-container'>
                    <TextSection contents="Some notes for the airport! If you have any problems or need help getting around, ask anyone that works in the airport or call/text me!" />
                    <ItemList list={list} />
                </div>
            </div>
        )
    }
}

export default AirportList

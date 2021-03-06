import React from 'react'
import TextSection from './TextSection'
import ItemList from './ItemList'

class HomeList extends React.Component {
    render() {
        const listContents = [
            "Have an ID with a picture of you for the airport (school ID?)",
            "Print off the flight confirmation I email you, have one for each of you",
            "$25 for each bag you wanna check",
            "Backpack or small bag to carry on the plane",
            "Phone Chargers",
            "Tablets/Computers",
            "Coats (it's cold!)",
            "A week's worth of clothes",
            "Scarves",
            "Gloves",
            "Winter hat",
            "Toothbrush"
        ]
        return (
            <div className='page-list'>
                <div className='list-container'>
                    <TextSection 
                        contents="These are the things you'll wanna make sure you bring from home."
                    />
                    <ItemList list={listContents} />
                </div>
            </div>
        )
    }
}

export default HomeList

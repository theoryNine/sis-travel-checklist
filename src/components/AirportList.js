import React from 'react'
import ListItem from './ListItem'
import TextSection from './TextSection'

class AirportList extends React.Component {
    render() {
        return (
            <div>
                <TextSection contents='Some Stuff At the Airport' />
                <ListItem contents='Test Item!' />
            </div>
        )
    }
}

export default AirportList

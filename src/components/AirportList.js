import React from 'react'
import ListItem from './ListItem'
import TextSection from './TextSection'

class AirportList extends React.Component {
    render() {
        return (
            <div>
                <TextSection contents='Some Stuff At the Airport' />
                <ul>
                    <ListItem contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                </ul>
            </div>
        )
    }
}

export default AirportList

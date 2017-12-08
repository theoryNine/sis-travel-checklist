import React from 'react'
import ListItem from './ListItem'
import TextSection from './TextSection'

class AirportList extends React.Component {
    render() {
        return (
            <div>
                <TextSection contents='Some Stuff At the Airport' />
                <ul>
                    <ListItem key={1} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem key={2} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem key={3} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem key={4} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem key={5} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem key={6} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                </ul>
            </div>
        )
    }
}

export default AirportList

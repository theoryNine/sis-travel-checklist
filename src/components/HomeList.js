import React from 'react'
import TextSection from './TextSection'
import ListItem from './ListItem'

class HomeList extends React.Component {
    render() {
        return (
            <div>
                <TextSection contents='Before you Leave' />
                <ul>
                    <ListItem key={1} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                    <ListItem key={2} contents='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, maiores.' />
                </ul>
            </div>
        )
    }
}

export default HomeList

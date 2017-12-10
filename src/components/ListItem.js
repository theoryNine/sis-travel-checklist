import React from 'react'

class ListItem extends React.Component {
    render() {
        return (
         <div className='list-item'>
          <input type='checkbox' />
          <label>{ this.props.contents }</label>
         </div>
        )
    }
}

export default ListItem

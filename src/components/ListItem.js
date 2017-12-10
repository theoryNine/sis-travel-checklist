import React from 'react'

class ListItem extends React.Component {
   constructor() {
      super()
      this.handleClick = this.handleClick.bind(this)
   }

   toggleCheck() {

   }

   handleClick(event) {
      const itemKey = JSON.stringify(this.props.contents)
      localStorage.setItem(itemKey, 'on')
   }

   render() {
      return (
         <div className='list-item'>
            <input type='checkbox' onClick={ this.handleClick } />
            <label>{ this.props.contents }</label>
         </div>
      )
    }
}

export default ListItem

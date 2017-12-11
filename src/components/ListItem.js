import React from 'react'

class ListItem extends React.Component {
   state = {
      isChecked: false
   }

   constructor() {
      super()
      this.handleClick = this.handleClick.bind(this)
   }

   componentWillMount() {
      const localStorageRef = localStorage.getItem(this.props.contents)
      console.log(localStorageRef)
      if (localStorageRef) {
         this.setState({
            isChecked: JSON.parse(localStorageRef)
         })
      }
   }

   handleClick() {
      const itemKey = this.props.contents
      this.setState(({ isChecked }) => ({
         isChecked: !isChecked
      }))
      localStorage.setItem(itemKey, !this.state.isChecked)
   }

   render() {
      const { isChecked } = this.state
      return (
         <div className='list-item' onClick={ this.handleClick }>
            <input type='checkbox' checked={isChecked} />
            <label>{ this.props.contents }</label>
         </div>
      )
    }
}

export default ListItem

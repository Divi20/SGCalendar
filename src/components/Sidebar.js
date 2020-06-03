import React, { Component } from 'react'
import SidebarIcon from './SidebarIcon'
import Time from './TimeComponent'
export default class Sidebar extends Component {
  state = {
     isOpen: true
   }
 
   renderSidebar = () => {
     if (!this.state.isOpen) {
       return null
     }
 
     return <div className="sidebar">
    <Time></Time>
       
    </div>
  }
toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
render() {
    return <div className="sidebar-container">
      {this.renderSidebar()}
      <div className="sidebar-icon">
        <SidebarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        style={{marginTop:0}}/>
      </div>
    </div>
  }
}

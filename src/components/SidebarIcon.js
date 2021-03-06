import React from 'react'
import { FaBars} from 'react-icons/fa'
const SidebarIcon = ({handleClick, isOpen}) => {
  return <div onClick={handleClick}>
    {isOpen ? <FaBars /> : <FaBars/>}
  </div>
}
export default SidebarIcon
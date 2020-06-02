import React from 'react'
import { FaBars,FaClosedCaptioning } from 'react-icons/fa'
const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <FaClosedCaptioning /> : <FaBars/>}
  </span>
}
export default SidebarIcon
import React from 'react'
import './css/sidebarOpt.css'

const SidebarOpt = ({active, text, Icon}) => {
    return (
        <div className= {`sidebarOpt ${active && "sidebarOpt--active"}`} >
            <Icon className='mui-icons'/>
            <h3>{text}</h3>
        </div>
    )
}

export default SidebarOpt

import React from 'react'
import {NotificationsNone, Language, Settings, ChatBubble} from '@mui/icons-material'
import './topnav.css'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <div className='topnavContainer'>
        <div className='topnavWrapper'>
            <div className='topLeft'>
                <span className='logo'>
                    <Link to='/' style={{textDecoration:'none'}}>
                    AdminDash
                    </Link>
                </span>
            </div>
            <div className='topRight'>
                <div class= 'topnavIconContainer'>
                    <NotificationsNone className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div class='topnavIconContainer'>
                    <Language className='topnavIcon'/>
                    <span className='topIconBadge'>3</span>
                </div>
                <div className='topnavIconContainer' >
                    <Settings className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topnavIconContainer' >
                    <ChatBubble className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <img src='https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='internet issue' className='adminImg'/>
            </div>
        </div>
    </div>
  )
}

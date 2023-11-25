import React from 'react'
import { MailOutline, Publish} from '@mui/icons-material'
import './userprofile.css'
import { CalendarToday, LocationSearching, PermIdentity, PhoneAndroid } from '@mui/icons-material'
import image1 from '../../public/images/khan.jpg'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  return (
    <div className='profileTopContainer'>
        <div className='profileTitleContainer'>
            <h1 className='profileTitle'>Edit Profile</h1>
            <Link to='/createuser'>
            <button className='profileAddButton'>create user</button>
            </Link>
          
        </div>
        <div className='profileContainer'>
            <div className='profileShow'>
                <div className='profileShowTop'>
                    <img src={image1} alt="internet issue"  className='profileShowImg'/>
                    <div className='profileDetails'>
                        <span className='myProfileName'>khan</span>
                        <span className='myProfileTitle'>React Div</span>
                    </div>
                </div>
                <div className='profileShowBottom'>
                    <span className='profileShopTitle'>Account Details</span>
                    <div className='profileShowInfo'>
                        <PermIdentity className='profileShowIcon'/>
                        <span className='profileShowInfoTitle'>Daisy234</span>
                    </div>
                    <div className='profileShowInfo'>
                        <CalendarToday className='profileShowIcon'/>
                        <span className='profileShowInfoTitle'>13 Jan 2023</span>
                    </div>
                    <div className='profileShowInfo'>
                        <PhoneAndroid className='profileShowIcon'/>
                        <span className='profileShowInfoTitle'>00923467575455</span>
                    </div>
                    <div className='profileShowInfo'>
                        <MailOutline className='profileShowIcon'/>
                        <span className='profileShowInfoTitle'>khansaid@gmail.com</span>
                    </div>
                    <div className='profileShowInfo'>
                        <LocationSearching className='profileShowIcon'/>
                        <span className='profileShowInfoTitle'>Mardan city</span>
                    </div>
                </div>
            </div>

             <div className='profileUpdate'>
                <span className='profieUpdateTitle'></span>
                <form className='profileUpdateForm'>
                    <div className='profileUpdateLeft'>
                        <div className='profileUpdateItem'>
                            <label>proflie name</label>
                            <input type="text" placeholder='profile name' className='profileUpdateInput' />
                        </div>
                        <div className='profileUpdateItem'>
                            <label>full name</label>
                            <input type="text" placeholder='name' className='profileUpdateInput' />
                        </div>
                        <div className='profileUpdateItem'>
                            <label>email</label>
                            <input type="text" placeholder='email' className='profileUpdateInput' />
                        </div>
                        <div className='profileUpdateItem'>
                            <label>phone</label>
                            <input type="text" placeholder='phone' className='profileUpdateInput' />
                        </div>
                        <div className='profileUpdateItem'>
                            <label>address</label>
                            <input type="text" placeholder='address' className='profileUpdateInput' />
                        </div>
                    </div>

                    <div className='profileUpdateRight'>
                        <div className='profileUpdatUpload'>
                            <img src={image1} alt="internet issue" className='profileUpdateImg'/>
                            <label htmlFor="file"><Publish className='profileUpdateIcon'/></label>
                            <input 
                            type="file" 
                            id="file" 
                            style={{display:"none"}}
                            ></input>
                        </div>
                        <button className='profileUpdateButton'>Update</button>
                    </div>
                </form>
             </div>

        </div>
    </div>
  )
}

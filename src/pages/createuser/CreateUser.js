import React from 'react'
import './createuser.css'
export default function CreateUser() {
  return (
    <div className='createUserContainer'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='createUserForm'>
            <div className='newUserItem'>
                <label>UserName</label>
                <input type="text" placeholder="daisy" />
            </div>
            <div className='newUserItem'>
                <label >Full Name</label>
                <input type="text" placeholder='full name' />
            </div>
            <div className='newUserItem'>
                <label>Email</label>
                <input type="text" placeholder='email'/>
            </div>
            <div className='newUserItem'>
                <label>Password</label>
                <input type="text" placeholder='password'/>
            </div>
            <div className='newUserItem'>
            <label>Phone</label>
            <input type="text" placeholder='phone number'/>
            </div>
            <div className='newUserItem'>
             <label>Address</label>
             <input type="text" placeholder='address'/>
            </div>
            <div className='newUserItem'>
                <label>Age</label>
                <input type="text" placeholder='age'/>
            </div>
            <div className='newUserItem'>
                <label>Gender</label>
            </div>
            <div className='newUserGender'>
                <input type="radio" name='gender' id='male' value="male" />
                <label for="male">Male</label>
                <input type="radio" name='Female' id='male' value="male"/>
                <label for='female'>Female</label>
                <label for="other">Other</label>
            </div>
            <div className='newUserItem'>
                <label>Active</label>
                <select className='newUserSelect' name='Active'>
                    <option value="yes"></option>
                    <option value="no"></option>t
                </select>
            </div>
            <button className='newUserButton'>Create Button</button>
        </form>
    </div>
  )
}

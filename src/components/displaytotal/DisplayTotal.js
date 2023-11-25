import React from 'react'
import { 
    CircularProgressbarWithChildren, 
    buildStyles 
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import'./displayTotal.css'

export default function DisplayTotal() {
  return (
    <div className='displayContainer' style={{marginTop: '1.5rem'}}>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
               <CircularProgressbarWithChildren
               value={80}
               text={`${80}%`}
               strokeWidth={10}
               styles={buildStyles({
                strokeLinecap: 'butt'
               })}
               />
            </div>
            <p className='title'>Total sales per day</p>
            <p className='amount'>&789</p>
            <p className='description'>Processing of previous transactions, last payment might not be accounted for</p>

            <div className='summary'>
                <div className='item'>
                   <div className='displayItemTitle'>Daily Target</div>
                   <div className='itemResult positive'>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className='resultAmount'>$1573</div>

                   </div>
                
                </div>
                <div className='item'>
                   <div className='displayItemTitle'>Last Week</div>
                   <div className='itemResult negative'>
                    <KeyboardArrowUp fontSize='small'/>
                    <div className='resultAmount'>$1573</div>

                   </div>
                
                </div>
                <div className='item'>
                   <div className='displayItemTitle'>Monthly Target</div>
                   <div className='itemResult positive'>
                    <KeyboardArrowUp fontSize='small'/>
                    <div className='resultAmount'>$20573</div>

                   </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

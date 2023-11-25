import React from 'react'
import { Visibility } from '@mui/icons-material'
import './menbersWidget.css'
export default function MenbersWidget() {
  return (
    <div className='menbersWidgetContainer'>
        <span className='menbersWidgetTitle'>Newly joined members</span>
        <ul className='menbersWidgetList'>
            <li className='menbersWidgetListItem'>
                <img src='menbers/admin.jpeg' alt='internet issue' className='widgetImg' />
                <div className='menbersWidgetUser'>
                    <span className='menbersWidgetUsername'>daisy Dominci</span>
                    <span className='menbersWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menbersWidgetButton'>
                <Visibility className='menbersWidgetIcon'/>
                Display
                </button>
            </li>
            <li className='menbersWidgetListItem'>
                <img src='menbers/saima.jpeg' alt='internet issue' className='widgetImg' />
                <div className='menbersWidgetUser'>
                    <span className='menbersWidgetUsername'>lili</span>
                    <span className='menbersWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menbersWidgetButton'>
                <Visibility className='menbersWidgetIcon'/>
                Display
                </button>
            </li>
            <li className='menbersWidgetListItem'>
                <img src='menbers/alina.jpeg' alt='internet issue' className='widgetImg' />
                <div className='menbersWidgetUser'>
                    <span className='menbersWidgetUsername'>daisy shami</span>
                    <span className='menbersWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menbersWidgetButton'>
                <Visibility className='menbersWidgetIcon'/>
                Display
                </button>
            </li>
            <li className='menbersWidgetListItem'>
                <img src='menbers/laiba.jpeg' alt='internet issue' className='widgetImg' />
                <div className='menbersWidgetUser'>
                    <span className='menbersWidgetUsername'>daila</span>
                    <span className='menbersWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menbersWidgetButton'>
                <Visibility className='menbersWidgetIcon'/>
                Display
                </button>
            </li>
            <li className='menbersWidgetListItem'>
                <img src='menbers/saima.jpeg' alt='internet issue' className='widgetImg' />
                <div className='menbersWidgetUser'>
                    <span className='menbersWidgetUsername'>arbia Dominci</span>
                    <span className='menbersWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menbersWidgetButton'>
                <Visibility className='menbersWidgetIcon'/>
                Display
                </button>
            </li>
        </ul>
    </div>
  )
}

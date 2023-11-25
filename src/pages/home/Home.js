import React from 'react'
import Chart from '../../components/chart/Chat'
import DisplayTotal from '../../components/displaytotal/DisplayTotal'
import Featured from '../../components/featured/Featured'
import './home.css'
import OrderWidget from '../../components/orderwidget/OrderWidget'
import MenbersWidget from '../../components/menberWidget/MenbersWidget'

export default function Home() {
  return (
    <div className='homeContainer'>
      <Featured/>
      <div className='chartAnalyticWidget'>
        <Chart/>
        <DisplayTotal/>
      </div>
      <div className='orderAndMenberWidget'>
        <OrderWidget/>
        <MenbersWidget/>
      </div>
    </div>
  )
}

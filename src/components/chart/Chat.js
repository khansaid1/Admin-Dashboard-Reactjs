import React from 'react'
import { AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer } 
    from 'recharts';
    import "./chart.css"


export default function() {
    const data = [
        {
          name: 'Jan',
          expensis: 4000,
          returns: 2400,
          total: 2400,
        },
        {
          name: 'Feb',
          expensis: 3000,
          returns: 1398,
          total: 2210,
        },
        {
          name: 'Mar',
          expensis: 2000,
          returns: 9800,
          total: 2290,
        },
        {
          name: 'April',
          expensis: 2780,
          returns: 3908,
          total: 2000,
        },
        {
          name: 'May',
          expensis: 1890,
          returns: 4800,
          total: 2181,
        },
        {
          name: 'June',
          expensis: 2390,
          returns: 3800,
          total: 2500,
        },
        {
          name: 'July',
          expensis: 3490,
          returns: 4300,
          total: 2100,
        },
      ];
  return (
    <div className='chartContainer' style={{marginTop: '1.5rem'}}>
<AreaChart
    width={830} 
    height={350} 
    data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="expensis" stroke="#8884d8" fillOpacity={1} fill="url(#colorRv)" />
    <Area type="monotone" dataKey="returns" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>
    </div>
    
  )
}

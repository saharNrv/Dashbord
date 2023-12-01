import React from 'react';
import './chart.css';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    Area,
    AreaChart
    

}from 'recharts'

export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
            <AreaChart data={data}>
                <Area type="monotone" dataKey={dataKey} stroke='#8884d8' />
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
            </AreaChart>

        </ResponsiveContainer>

      
    </div>
  );
}

import React from 'react';
import './Home.css'
import Featurs from '../../Components/featurs/Featurs';
import Chart from '../../Components/chart/Chart';
import { chartData } from '../../chartData';

export default function Home() {
  return (
    <div className='home'>
      <Featurs/>
      <Chart grid title="Month Sale" data={chartData} dataKey="Sale"/>
    </div>
  );
}

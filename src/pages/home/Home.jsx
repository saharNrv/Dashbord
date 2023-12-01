import React from 'react';
import './Home.css'
import Featurs from '../../Components/featurs/Featurs';
import Chart from '../../Components/chart/Chart';
import { chartData } from '../../chartData';
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
      <Featurs/>
      <Chart grid title="Month Sale" data={chartData} dataKey="Sale"/>
      <div className='homeWidget'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}

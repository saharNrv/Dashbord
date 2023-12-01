import React from 'react';
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { widgetSmUsers } from '../../chartData';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
       <span className='widgetSmTitle'>New Join Memeber</span>

       <ul className='widgetSmList'>
        {widgetSmUsers.map(user=>(
            <li className='widgetItem'>
            <img src={user.img} className='widgetSmImg' />
            <div className='widgetSmUser'>
                <span className='widgetSmName'>{user.name}</span>
                <span className='widgetSmJob'>{user.job}</span>
            </div>
            <button className='widgetSmBtn'>
               <VisibilityIcon/>
            </button>
        </li>
        ))}

       </ul>
      
    </div>
  );
}

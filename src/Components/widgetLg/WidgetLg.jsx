import React from 'react';
import './widget.css';
import { widgetLgUser } from '../../chartData';

export default function WidgetLg() {

    const Button=({type})=>{
        return <button className={'widgetLgBtn ' + type}>{type}</button>
    }


  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Latest TransActions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amout</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            {widgetLgUser.map(user=>(
            <tr className="widgetLgTr" key={user.id}>
                <td className='widgetLgUsers'>
                    <img src={user.img} className='widgetLgImg' />
                    <span className='widgetLgName'>{user.name}</span>
                </td>
                <td className='widgetLgDate'>{user.date}</td>
                <td className='widgetLgAmout'>${user.amout}</td>
                <td className='widgetLgStatus'>
                      <Button type={user.status}/>
                </td>
            </tr>

            ))}
        </table>
      
    </div>
  );
}

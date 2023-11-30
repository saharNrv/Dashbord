import React from 'react';
import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-wrapper'>
            <div className="sidebar-menu">
                <h3 className='sidbar-title'>dashbord title</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-item active'>
                         <LineStyleIcon className='sidebar-icon'/>
                         Home
                    </li>
                    <li className='sidebar-item'>
                         <TimelineIcon className='sidebar-icon'/>
                         Analytics
                    </li>
                    <li className='sidebar-item'>
                         <TrendingUpIcon className='sidebar-icon'/>
                         Sales
                    </li>
                </ul>

            </div>
            <div className="sidebar-menu">
                <h3 className='sidbar-title'>Quick Menu</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-item active'>
                         <GroupIcon className='sidebar-icon'/>
                         Users
                    </li>
                    <li className='sidebar-item'>
                         <PersonIcon className='sidebar-icon'/>
                         NewUser
                    </li>
                    <li className='sidebar-item'>
                         <StoreIcon className='sidebar-icon'/>
                         Products
                    </li>
                    <li className='sidebar-item'>
                         <CurrencyExchangeIcon className='sidebar-icon'/>
                         Transaction
                    </li>
                    <li className='sidebar-item'>
                         <BarChartIcon className='sidebar-icon'/>
                         Reports
                    </li>
                </ul>

            </div>
            <div className="sidebar-menu">
                <h3 className='sidbar-title'>Notifications</h3>
                <ul className='sidebar-list'>
                    <li className='sidebar-item active'>
                         <MailOutlineIcon className='sidebar-icon'/>
                         Email
                    </li>
                    <li className='sidebar-item'>
                         <DynamicFeedIcon className='sidebar-icon'/>
                         Feedback
                    </li>
                    <li className='sidebar-item'>
                         <ChatBubbleOutlineIcon className='sidebar-icon'/>
                         Message
                    </li>
                </ul>

            </div>
        </div>
      
    </div>
  );
}

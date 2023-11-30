import React from 'react';
import './Header.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
    <div className='header'>

        <div className='header-wrapper'>
             <div className="header-left">
                <h1>Dashbord❤️</h1>
             </div>
             <div className="header-right">
                <div className='header-cover'>
                    <img src="logo192.png" className='header-img' />
                </div>
                <div className='icon-wrapper'>
                <div className='icon-content'>
                    <SettingsIcon/>
                   
                </div>
                <div className='icon-content'>
                    <NotificationsIcon/>
                    <span>2</span>
                </div>
                <div className='icon-content'>
                    <LanguageIcon/>
                    <span>2</span>
                </div>
               
                </div>
                
             <div>
                    
                </div>
             </div>
        </div>
      
    </div>
  );
}

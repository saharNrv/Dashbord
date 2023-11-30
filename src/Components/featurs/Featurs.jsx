import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './featurs.css'


export default function Featurs() {
  return (
    <div className='featuers'>
        <div className='featuerItam'>
            <span className='featuerTitle'>Revanue</span>
            <div className='featuerContainer'>
                <span className='featuerMony'>$2,415</span>
                <span className='featureRate'>
                    -11.4 <ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className='fetureSubTitle'>Compared to last month</span>
        </div>
        <div className='featuerItam'>
            <span className='featuerTitle'>Sales</span>
            <div className='featuerContainer'>
                <span className='featuerMony'>$4,415</span>
                <span className='featureRate'>
                    -1.4 <ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className='fetureSubTitle'>Compared to last month</span>
        </div>
        <div className='featuerItam'>
            <span className='featuerTitle'>Cost</span>
            <div className='featuerContainer'>
                <span className='featuerMony'>$2,225</span>
                <span className='featureRate'>
                    +2.4 <ArrowUpwardIcon className='featureIcon positive'/>
                </span>
            </div>
            <span className='fetureSubTitle'>Compared to last month</span>
        </div>

      
    </div>
  );
}

import React, { useState } from 'react';
import { userList } from '../../chartData';
import './userList.css'

export default function UserList() {

  const [userListData,setUserList]=useState(userList)
  console.log(userListData);


  return (
    <div className='userList'>
      
    </div>
  );
}

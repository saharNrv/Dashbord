import React, { useState } from 'react';
import { userList } from '../../chartData';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom' ;
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserList() {

  const [userListData,setUserList]=useState(userList)

  const deleteFun=(userID)=>{
    setUserList(userListData.filter(user=>user.id !==userID))
  }
  
  const colums=[
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field:'user',
      headerName:'User',
      width:300,
      renderCell:(params)=>{
        return(
        <div className='userListWrap'>
          <img src={params.row.avatar} className='userListImg' />
          <span>{params.row.userName}</span>

        </div>
        )
      }
    },
    {
      field:'amout',
      headerName:'Amout',
      width:150
    },
    {
      field:'email',
      headerName:'Email',
      width:180
    },
    {
       field:'status',
       headerName:'Active',
       width:150
    },
    {
      field:'action',
      headerName:'Action',
      width:150,
      renderCell:(params)=>{
        return(
          <div className='userListAction'>
            <Link to={`/product/${params.row.id}`}>
              <button className='userListEdit'><EditIcon/></button>
            </Link>
            <DeleteIcon className='userListDelete' onClick={()=>deleteFun(params.row.id)}/>

          </div>
        )
      }
    }
  ]


  return (
    <div className='userList'>
      <DataGrid
      rows={userListData}
      columns={colums}
      disableSelectionOnClick
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 3,
          },
        },
      }}
      
      />
    </div>
  );
}

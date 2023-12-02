import React,{useState} from 'react';
import './product.css';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom' ;
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { productData } from '../../chartData';

export default function Product() {

  const [productsData,setProductsData]=useState(productData)

  const deleteFun=(productID)=>{
    setProductsData(productsData.filter(user=>user.id !==productID))
  }

  const colums=[
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field:'title',
      headerName:'Name',
      width:300,
      renderCell:(params)=>{
        return(
        <div className='userListWrap'>
          <img src={params.row.avatar} className='userListImg' />
          <span>{params.row.productName}</span>

        </div>
        )
      }
    },
  
    {
      field:'price',
      headerName:'Price',
      width:180
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
    <div className='product'>
<DataGrid
      rows={productsData}
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

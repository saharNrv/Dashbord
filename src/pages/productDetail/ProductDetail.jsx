import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './productDetail.css';
import Chart from './../../Components/chart/Chart'
import { productChart } from '../../chartData'; 
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { productData } from '../../chartData';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {

    let param=useParams()
    

    const[productDetaileData,setProductData]=useState(productData)
    const[proName,setProName]=useState(
        
            productDetaileData.find(pro=>(
                pro.id==param.productID
                
                )).productName
           
            
    )
    const[proPrice,setProPrice]=useState(
        productDetaileData.find(pro=>(
            pro.id==param.productID
            
            )).price

    )
    const[proID,setProID]=useState(
        productDetaileData.find(pro=>(
            pro.id==param.productID
            
            )).id
    )
    const[proImg,setProIM]=useState(
        productDetaileData.find(pro=>(
            pro.id==param.productID
            
            )).avatar
    )

   console.log(proImg);

  return (
    <div className='productDetail'>
        <div className="productDetailContainer">
            <h1 className='productDetailTitle'>Product</h1>
            <Link to='/newProduct'>
                <button className='productDetailBtn'>
                   Create
                </button>
            </Link>
        </div>
        <div className='productDetaileTop'>
            <div className='productDetailRight'>
               <Chart data={productChart} dataKey='sales' />
            </div>
            <div className='productDetailLeft'>
                
                <div className='productDetailInfo'>
                    <img src={proImg} className='productDetailImg' />
                    <span className='productDetailName'>{proName}</span>
                </div>
            <div className='productDetailBottom'>
              <div className='productdetailItem'>
                <div className='productDetailKey'>ID:</div>
                <div className='productDetailVlaue'>{proID}</div>
               </div>
            <div className='productdetailItem'>
                <div className='productDetailKey'>Name:</div>
                <div className='productDetailVlaue'>{proName}</div>
            </div>
            <div className='productdetailItem'>
                <div className='productDetailKey'>Sales:</div>
                <div className='productDetailVlaue'>{proPrice}</div>
            </div>
            <div className='productdetailItem'>
                <div className='productDetailKey'>Active:</div>
                <div className='productDetailVlaue'>yes</div>
            </div>
            <div className='productdetailItem'>
                <div className='productDetailKey'>In Stock:</div>
                <div className='productDetailVlaue'>No</div>
            </div>
                 </div>
            </div>

     
        </div>

        <div className='productDetailFormWrap'>
            <form className='productDetailForm'>
                <div className='productDetileFormItem'>
                    <label>Product Name</label>
                    <input type="text" placeholder='Dell laptop' />

                    <label>In Stock</label>
                    <select >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='productDetailFormRight'>

                    <div className='upload'>
                        <div className='uploadWrap'>
                            <img src="/image/pro2.jpg" className='uploadImg' />
                            <FileDownloadIcon/>
                        </div>
                        <button className='uploadBtn'>upload File</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
  );
}

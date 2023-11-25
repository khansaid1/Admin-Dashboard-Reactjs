import { DataGrid} from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import {DeleteOutline} from '@mui/icons-material'
import React,{ useState } from 'react';
import { usersData } from '../../dataFile/userData';
import { ProductData } from '../../dataFile/userDetail';
import './productlist.css'

export default function ProductList() {
    const [data, setData]= useState(ProductData)
    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !==id))
    } 

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'product', width: 200,
              renderCell:(params)=>{
                return(
                    <div className='productListItem'>
                        {params.row.avatar}
                        {params.row.userName}
                    </div>
                )
              }
    },
        { field: 'stock', headerName: 'stock', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'price',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'action',
            width: 160,
            renderCell: (params)=>{
                return(
                    <div className='actionContainer'>
                        <Link to={'/user/' +params.row.id}>

                        <button className='productListEdit'>edit</button>

                        </Link>
                        
                         <DeleteOutline className='productDelete'
                         onClick={()=>handleDelete(params.row.id)}
                         />
                    </div>
                )
            }
          },
      ];

      return(
        <div className='productListContainer'>
        <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
            checkboxSelection
      />
        </div>
      )

    }
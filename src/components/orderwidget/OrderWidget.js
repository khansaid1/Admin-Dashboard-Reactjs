import React from 'react'
import './orderWidget.css'

export default function OrderWidget() {
    const Button = ({type})=>{
        return <button className={'orderButton ' + type}>{type}</button>
    } 
  return (
    <div className='orderContainer'>
        <h3 className='orderTitle'> Latest Transaction</h3>
        <table className='orderTable'>
          <tr className='orderTr'>
            <th orderTh>Customer</th>
            <th orderTh>Date</th>
            <th orderTh>Product</th>
            <th orderTh>Amount</th>
            <th orderTh>Location</th>
            <th orderTh>Status</th>
          </tr>
          <tr className='orderTr'>
            <td className='orderUser'>
                <img src ='images/earphone.jpg' alt='internet issue' className='orderImg'/>
                <span className='orderName'>earphone</span>
            </td>
            <td className='orderDate'>4 Jan 2023</td>
            <td className='orderName'>Sumsung earphone</td>
            <td className='orderAmount'>$404</td>
            <td className='orderLocation'>USA</td>
            <td className='orderStatus'><Button type='Approved'/></td>
          </tr>
          <tr className='orderTr'>
            <td className='orderUser'>
                <img src ='images/jacket.jpg' alt='internet issue' className='orderImg'/>
                <span className='orderName'>jacket</span>
            </td>
            <td className='orderDate'>4 Jan 2023</td>
            <td className='orderName'>Gucci</td>
            <td className='orderAmount'>$504</td>
            <td className='orderLocation'>uk</td>
            <td className='orderStatus'><Button type='Cancel'/></td>
          </tr>
          <tr className='orderTr'>
            <td className='orderUser'>
                <img src ='images/shoe.jpg' alt='internet issue' className='orderImg'/>
                <span className='orderName'>shoe</span>
            </td>
            <td className='orderDate'>4 Jan 2023</td>
            <td className='orderName'>Hush puppies</td>
            <td className='orderAmount'>$404</td>
            <td className='orderLocation'>USA</td>
            <td className='orderStatus'><Button type='Pending'/></td>
          </tr>
          <tr className='orderTr'>
            <td className='orderUser'>
                <img src ='images/watch.jpg' alt='internet issue' className='orderImg'/>
                <span className='orderName'>watch</span>
            </td>
            <td className='orderDate'>4 Jan 2023</td>
            <td className='orderName'>Rado</td>
            <td className='orderAmount'>$412</td>
            <td className='orderLocation'>japan</td>
            <td className='orderStatus'><Button type='Approved'/></td>
          </tr>
          <tr className='orderTr'>
            <td className='orderUser'>
                <img src ='images/earphone.jpg' alt='internet issue' className='orderImg'/>
                <span className='orderName'>earphone</span>
            </td>
            <td className='orderDate'>4 Jan 2023</td>
            <td className='orderName'>Sumsung earphone</td>
            <td className='orderAmount'>$404</td>
            <td className='orderLocation'>USA</td>
            <td className='orderStatus'><Button type='Approved'/></td>
          </tr>
          <tr className='orderTr'>
            <td className='orderUser'>
                <img src ='images/earphone.jpg' alt='internet issue' className='orderImg'/>
                <span className='orderName'>earphone</span>
            </td>
            <td className='orderDate'>4 Jan 2023</td>
            <td className='orderName'>Sumsung earphone</td>
            <td className='orderAmount'>$404</td>
            <td className='orderLocation'>USA</td>
            <td className='orderStatus'><Button type='Approved'/></td>
          </tr>
        </table>
    </div>
  )
}

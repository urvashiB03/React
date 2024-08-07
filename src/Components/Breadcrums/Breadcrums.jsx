import React from 'react'
import './Breadcrums.css'
import arrow_logo from '../Assets/next_arrow.png'
const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_logo} alt=""/> SHOP <img src={arrow_logo} alt=""/> {product.category} <img src={arrow_logo} alt=""/> {product.name}
    </div>
  )
}

export default Breadcrums

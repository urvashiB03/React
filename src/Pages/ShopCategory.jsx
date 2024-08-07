import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down_logo from '../Components/Assets/drop_down_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category-head">


      <div className='shop-category'>
        <div className="shop-category-left">
          <p>New</p>
          <p>Collection</p>
          <div className="shop-category-latest-btn">
            <div>Explore</div>
          </div>
        </div>
        <div className="shop-category-right">
          <img className='shop-category-banner' src={props.banner} alt="" />
        </div>
        </div>
        <div className="shop-category-indexSort">
          <p>
            <span>Showing 1-10</span>out of 30 products
          </p>
          <div className="shop-category-sort">
            <p> Sort by
              </p> <img src={drop_down_logo} alt="" />
          </div>
        </div>
        <div className="shop-category-product">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={"£" + item.new_price} old_price={"£" + item.old_price} />
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="shop-category-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory

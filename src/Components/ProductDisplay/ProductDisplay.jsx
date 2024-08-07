import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_hollow_icon from '../Assets/star_hollow_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    console.log(product);
    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_hollow_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-prices-old">£{product.old_price}</div>
                    <div className="product-display-right-prices-new">£{product.new_price}</div>
                </div>
                <div className="product-display-right-description">
                    White T-shirt with quarter sleeve
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>

    )
}

export default ProductDisplay

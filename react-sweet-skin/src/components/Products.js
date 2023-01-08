
import React from 'react';
import products from '../js/products.json';

class Products extends React.Component {
          
  render() {
    return (
        <div className="Products">
            <div id="top" className="hero-content">
                <h2>All Products</h2>
                <p>Fruit-forward, clinically tested products for radiant skin</p>
            </div>

            <main id="products-container">
                {
                    products.map((product, index) => {
                        return (
                            <div className="product" key={index}>
                            <img className="main-img" src={`/assets/img/${product.imgSrc}`}/>
                            <img className="hover-img" src={`/assets/img/${product.hoverImgSrc}`} alt="productHoverImg"  />
                            <h4>{product.name}</h4>
                            <span>{product.category}</span>
                            <p className="description">{product.description}</p>
                            <span className="price">{product.price}</span>
                            <div dangerouslySetInnerHTML={ {__html: product.reviews} }>
                            </div>
                            <input className="button purchase" type="button" value="Add to Bag" />
                        </div>
                    )}
                )}
            </main>

            <div className="products-link__container">
                <div className="products-link">
                    <a href="#nav" className="button">Back to Top <span className="fa-solid fa-arrow-up"></span></a>
                </div>
            </div>
        </div>
    );
  }
}

export default Products;

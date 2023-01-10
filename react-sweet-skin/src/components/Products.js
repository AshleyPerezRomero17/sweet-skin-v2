import React, { useState, useEffect } from "react";
import Filter from "./Filter.js";

export default function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://wyhbmhdpt6.execute-api.us-east-1.amazonaws.com/default", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    }).then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
          const products = result
        },
        (error) => {
          setIsLoaded(true);
          console.log('isLoaded:  ', isLoaded)
          setError(error);
          console.log('error:  ', error)
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div className="Products">
                <div id="top" className="hero-content">
                  <Filter products={products}/>

                  <hr></hr>

                  <h2 className="products-title">All Products</h2>
                  <p>Fruit-forward, clinically tested products for radiant skin</p>
                </div>

                <main id="products-container">
                {products.map((product, index) => {
                        return (
                        <div className="product" key={index}>
                            <img
                            className="main-img"
                            src={`${product.IMG}`}
                            />
                            <img
                            className="hover-img"
                            src={`${product.HoverImg}`}
                            alt="productHoverImg"
                            />
                            <h4>{product.Name}</h4>
                            <span>{product.Category}</span>
                            <p className="description">{product.Description}</p>
                            <span className="price">${product.Price}</span>
                            <div
                            dangerouslySetInnerHTML={{ __html: product.Reviews }}
                            ></div>
                            <input
                            className="button purchase"
                            type="button"
                            value="Add to Bag"
                            />
                        </div>
                        );
                    })}
                </main>
            
                    <div className="products-link__container">
                    <div className="products-link">
                        <a href="#nav" className="button">
                        Back to Top <span className="fa-solid fa-arrow-up"></span>
                        </a>
                    </div>
                    </div>
                </div>
    );
  }
}


import React, { useState, useEffect } from "react";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handlePriceClick = this.handlePriceClick.bind(this);
        this.state = {
            category: this.category,
            price: this.price

        }


    };
    handleCategoryClick(categoryType) {
        this.setState({category: categoryType});
    }

    handlePriceClick(priceType) {
        console.log("priceType", priceType);
        this.setState({price: priceType});
    }

    render() {
        return (
            <div className="filtered-items">
                <div className="button-container">
                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Cleanser")}
                >
                    Cleanser
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Cleansing Balm")}
                >
                    Cleansing Balm
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Cream")}
                >
                    Cream
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Serum")}
                >
                    Serum
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Face Milk")}
                >
                    Face Milk
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Body Butter")}
                >
                    Body Butter
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Face Mask")}
                >
                    Face Mask
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handleCategoryClick("Scrub")}
                >
                    Scrub
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handlePriceClick("0-20")}
                >
                    $0 - $20
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handlePriceClick("21-40")}
                >
                    $21 - $40
                </button> 

                <button
                    className="button-filter"
                    onClick={() => this.handlePriceClick("41-60")}
                >
                    $41 - $60
                </button> 
                </div>

                <div>
                    {this.state.price === "0-20" ? <div> {this.props.products.filter(product => product.Price <= 20).map((filteredCategory, index) => (
                        <div className="product" key={index}>
                            <img
                            className="main-img"
                            src={`${filteredCategory.IMG}`}
                            />
                            <img
                            className="hover-img"
                            src={`${filteredCategory.HoverImg}`}
                            alt="productHoverImg"
                            />
                            <h4>{filteredCategory.Name}</h4>
                            <span>{filteredCategory.Category}</span>
                            <p className="description">{filteredCategory.Description}</p>
                            <span className="price">${filteredCategory.Price}</span>
                            <div
                            dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                            ></div>
                            <input
                            className="button purchase"
                            type="button"
                            value="Add to Bag"
                            />
                        </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.price === "21-40" ? <div> {this.props.products.filter(product => product.Price <= 40 && product.Price >= 21).map((filteredCategory, index) => (
                        <div className="product" key={index}>
                            <img
                            className="main-img"
                            src={`${filteredCategory.IMG}`}
                            />
                            <img
                            className="hover-img"
                            src={`${filteredCategory.HoverImg}`}
                            alt="productHoverImg"
                            />
                            <h4>{filteredCategory.Name}</h4>
                            <span>{filteredCategory.Category}</span>
                            <p className="description">{filteredCategory.Description}</p>
                            <span className="price">${filteredCategory.Price}</span>
                            <div
                            dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                            ></div>
                            <input
                            className="button purchase"
                            type="button"
                            value="Add to Bag"
                            />
                        </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.price === "41-60" ? <div> {this.props.products.filter(product => product.Price <= 60 && product.Price >= 41).map((filteredCategory, index) => (
                        <div className="product" key={index}>
                            <img
                            className="main-img"
                            src={`${filteredCategory.IMG}`}
                            />
                            <img
                            className="hover-img"
                            src={`${filteredCategory.HoverImg}`}
                            alt="productHoverImg"
                            />
                            <h4>{filteredCategory.Name}</h4>
                            <span>{filteredCategory.Category}</span>
                            <p className="description">{filteredCategory.Description}</p>
                            <span className="price">${filteredCategory.Price}</span>
                            <div
                            dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                            ></div>
                            <input
                            className="button purchase"
                            type="button"
                            value="Add to Bag"
                            />
                        </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Cleanser" ? <div> {this.props.products.filter(product => product.Category === 'Cleanser').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                            <img
                            className="main-img"
                            src={`${filteredCategory.IMG}`}
                            />
                            <img
                            className="hover-img"
                            src={`${filteredCategory.HoverImg}`}
                            alt="productHoverImg"
                            />
                            <h4>{filteredCategory.Name}</h4>
                            <span>{filteredCategory.Category}</span>
                            <p className="description">{filteredCategory.Description}</p>
                            <span className="price">${filteredCategory.Price}</span>
                            <div
                            dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                            ></div>
                            <input
                            className="button purchase"
                            type="button"
                            value="Add to Bag"
                            />
                        </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Cleansing Balm" ? <div> {this.props.products.filter(product => product.Category === 'Cleansing Balm').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Cream" ? <div> {this.props.products.filter(product => product.Category === 'Cream').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Face Milk" ? <div> {this.props.products.filter(product => product.Category === 'Face Milk').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Serum" ? <div> {this.props.products.filter(product => product.Category === 'Serum').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Scrub" ? <div> {this.props.products.filter(product => product.Category === 'Scrub').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Face Mask" ? <div> {this.props.products.filter(product => product.Category === 'Face Mask').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>

                <div>
                    {this.state.category === "Body Butter" ? <div> {this.props.products.filter(product => product.Category === 'Body Butter').map((filteredCategory, index) => (
                        <div className="product" key={index}>
                        <img
                        className="main-img"
                        src={`${filteredCategory.IMG}`}
                        />
                        <img
                        className="hover-img"
                        src={`${filteredCategory.HoverImg}`}
                        alt="productHoverImg"
                        />
                        <h4>{filteredCategory.Name}</h4>
                        <span>{filteredCategory.Category}</span>
                        <p className="description">{filteredCategory.Description}</p>
                        <span className="price">${filteredCategory.Price}</span>
                        <div
                        dangerouslySetInnerHTML={{ __html: filteredCategory.Reviews }}
                        ></div>
                        <input
                        className="button purchase"
                        type="button"
                        value="Add to Bag"
                        />
                    </div>
                    ))}</div> : ""}  
                </div>
            </div>
        );
    }
}

export default Filter;

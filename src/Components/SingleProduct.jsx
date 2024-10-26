import React, { useEffect } from "react";
import { useContext } from "react";
import { Cartproducts } from "../Context/CartContex";

const SingleProduct = () => {
  const { AddtoCart,single } = useContext(Cartproducts);
  

  if (!single) {
    return <div>No product selected</div>; 
  }


  const initializeCartInteractions = () => {
  };
  useEffect(() => {
    initializeCartInteractions(); 
  }, []); 



 

  return (
    <>
      {/* Main Banner Area Start */}
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Single Product Page</h2>
                <span>
                  Awesome &amp; Creative HTML CSS layout by TemplateMo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Banner Area End */}

      {/* Product Area Starts */}
      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img style={{ width: "100%", height:"490px ",objectFit:"contain" }} src={single.imageUrl} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4></h4>
                <span className="price">{single.price}PKR</span>
                <ul className="stars">
                  <br />
                  {[...Array(5)].map((_, index) => (
                    <li key={index}>
                      <i className="fa fa-star"></i>
                    </li>
                  ))}
                </ul>
                <span>{single.description}</span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>{single.description}</p>
                </div>

                <div className="quantity-content">
                  <div style={{ fontWeight: "bold"}} className="left-content">
                  </div>
                 {single.title}
                </div>
              </div>
              <div className="total">
                <h4>Total: {single.price} PKR</h4>
                <div className="main-border-button">
                <a onClick={() => AddtoCart(single)}>Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Area Ends */}
    </>
  );
};

export default SingleProduct;

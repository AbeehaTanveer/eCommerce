import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { woman_top } from "../woman/woman_top";
import { mens_kurta } from "../Men/MenKurta";
import { Kids } from "../Kids/kids";
import { useContext } from "react";
import { Cartproducts } from "../Context/CartContex";

const Product = ({item}) => {

  const { handleSingleProduct,single ,autoCart} = useContext(Cartproducts) || {};
  






  // Reusable function for initializing OwlCarousel
  const initializeCarousel = (className) => {
    $(className).owlCarousel({
      items: 5,
      loop: true,
      dots: true,
      nav: true,
      margin: 30,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });
  };

  // Using useEffect to initialize different carousels
  useEffect(() => {
    initializeCarousel(".owl-men-item");
    initializeCarousel(".owl-women-item");
    initializeCarousel(".owl-kid-item");
  }, []);

  return (
    <div>
      {/* <!-- ***** Men Area Starts ***** --> */}
      <section className="section" id="men">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Men's Latest</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="men-item-carousel">
                <div className="owl-men-item owl-carousel">
                  {mens_kurta.map((item, index) => (
                    <div key={index} className="item">
                      <div className="thumb">
                        <div className="hover-content">
                          <ul>
                              <li>
                              <Link onClick={() => handleSingleProduct(item)}>
                              <i className="fa fa-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                             <Link onClick={()=>autoCart(item)} >
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <img
                          style={{
                            width: "100%",
                            height: "400px",
                          }}
                          src={item.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <span>{item.price}</span>
                        <ul className="stars">
                          <br />
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Men Area Ends ***** --> */}


      <section className="section" id="women">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Women's Latest</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="women-item-carousel">
                <div className="owl-women-item owl-carousel">
                  {woman_top.map((item, index) => (
                    <div key={index} className="item">
                      <div className="thumb">
                        <div className="hover-content">
                          <ul>
                              <li>
                              <Link onClick={() => handleSingleProduct(item)}>
                              <i className="fa fa-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                            <Link onClick={()=>autoCart(item)} >
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <img
                          style={{
                            width: "100%",
                            height: "490px",
                            objectFit: "cover",
                          }}
                          src={item.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <span>{item.price}PKR</span>

                        <ul className="stars">
                          <br />
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ***** Women Area Ends ***** --> */}

      {/* <!-- ***** Kids Area Starts ***** --> */}

      <section className="section" id="kids">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Kid's Latest</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="kid-item-carousel">
                <div className="owl-kid-item owl-carousel">
                  {Kids.map((item, index) => (
                    <div key={index} className="item">
                      <div className="thumb">
                        <div className="hover-content">
                          <ul>
                              <li>
                              <Link onClick={() => handleSingleProduct(item)}>
                              <i className="fa fa-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                            <Link onClick={()=>autoCart(item)} >
                                <i className="fa fa-shopping-cart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <img
                          style={{ width: "100%", height: "450px",objectFit:'contain' }}
                          src={item.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <span>{item.price}</span>
                        <ul className="stars">
                          <br />
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ***** Kids Area Ends ***** -->? */}
    </div>
  );
};

export default Product;

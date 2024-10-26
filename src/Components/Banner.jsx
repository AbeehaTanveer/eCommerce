import React from 'react'

const Banner = () => {
  return (
    <div>
      
      {/* <!-- ***** Main Banner Area Start ***** --> */}
    <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4> Online Shopping</h4>
                                <span>Awesome, clean &amp; online shop
                                Shop online for the latest trends and essentials, with convenience, variety, and doorstep delivery at your fingertips.
                                </span>
                                <div className="main-border-button">
                                
                                </div>
                            </div>
                            <img style={{width:"100%",height:"666px"}} src="/assets/images/left-banner-image.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                         
                                        <li className="scroll-to-section"><a  href="#women">
                                          <h4>   Women</h4>
                                            </a></li>

                                                <p>
                                                Stylish, versatile, and comfortable essentials for every occasion.
                                                </p>
                                               
                                            </div>
                                        </div>
                                        <img style={{height:"306px"}} src="https://st2.depositphotos.com/13108546/48989/i/450/depositphotos_489891938-stock-photo-woman-wearing-sunglasses-pink-hat.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">

                                            <li className="scroll-to-section"><a  href="#men">
                                          <h4>   Man</h4>
                                            </a></li>

                                                <p>
                                                Classic, comfortable, and tailored for a polished, everyday look.
                                                </p>
                                               
                                            </div>
                                    
                                        </div>
                                        <img style={{height:"306px"}} src="https://img.freepik.com/premium-photo/young-guy-checkered-shirt-isolated-grey-background-guy-casual-style_474717-130217.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6"> 
    <div className="right-first-image">
        <div className="thumb">
            <div className="inner-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
             
            </div>
            <div style={{ width: "200%" }} className="hover-content">
                <div className="inner">
                    <li className="scroll-to-section">
                        <a href="#kids">
                            <h4>Kids</h4>
                        </a>
                    </li>
                    <p>Classic, comfortable, and tailored for a polished, everyday look.</p>
                </div>
            </div>
            <img style={{ width: "210%", height: "319px" }} src="https://tshirtstore.centracdn.net/client/dynamic/articles/kid-tee-banner_6772.jpg" />
        </div>
    </div>
</div>

                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ***** Main Banner Area End ***** --> */}

    </div>
  )
}

export default Banner

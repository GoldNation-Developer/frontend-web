import React from 'react';
import { Link } from 'react-router-dom';

const BannerTwo = () => {
    return (
        <div className="slider-area banner-style-2 bg-image d-flex align-items-center">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="inner">
                            <div className="content">
                                <span className="pre-title">Better Learning Future With Us</span>
                                <h1 className="title">EXPLORE UNIVERSITAS</h1>
                                <p className="description">Dapatkan info seputar universitas impianmu di seluruh dunia, <br /> belajar bahasa asing dari native langsung.</p>
                                <div className="input-box input-group" >
                                    <input className='py-3' type="text" placeholder="Search Here" style={{width: '50%'}} />
                                </div>
                                {/* <div className="read-more-btn">
                                    <Link className="edu-btn" to="#">Get Started Today <i  className="icon-arrow-right-line-right"></i></Link>
                                </div> */}
                                <div className="arrow-sign d-lg-block d-none">
                                    <img src="/images/banner/banner-02/arrow.png" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-thumbnail">
                            <img className="girl-thumb" src={`https://eduvibe.react.devsvibe.com/images/banner/banner-02/banner-01.png`} alt="Girl Images" />
                        </div>
                        <div className="banner-bg d-lg-block d-none">
                            <img className="girl-bg" src="/images/banner/banner-02/girl-bg.png" alt="Girl Background" />
                        </div>
                    </div>
                </div>
                
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-19.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-05-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-19-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BannerTwo;
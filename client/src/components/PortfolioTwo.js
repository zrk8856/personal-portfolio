import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import imagePortfolio21 from '../images/portfolio2-1.gif'
import imagePortfolio22 from '../images/portfolio2-2.gif'
import imagePortfolio23 from '../images/portfolio2-3.gif'
import imagePortfolio24 from '../images/portfolio2-4.gif'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function PortfolioOne() {
    return (
        <div className="portfolio-detail__container container">
            <Swiper           
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio21} alt="" className="portfolio-detail__img-img" />                            
                    </div>
                    <h2 className="section__title portfolio-detail-title">Signup and Login</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio22} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Add to Cart</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio23} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Checkout</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio24} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Product Review</h2>
                </SwiperSlide>
            </Swiper>
            <div className="portfolio-detail__body">
                <p className="section__subtitle portfolio-detail-subtitle">A modern shopping website allowing users
                    to browse and review various items, add items to cart and checkout.
                </p>
                <ul className="portfolio-detail__ul">
                    <li>
                        Built backend with Ruby on Rails to handle all the frontend requests and preserve user data.
                    </li>                                
                    <li> 
                        Applied Redux to make React components cleaner and codes easier to reuse.                                   
                    </li>                                
                    <li>
                        Implemented authentication and authorization using Bcrypt to enable users to sign up and log in.
                    </li>
                    <li>
                        Integrated reset password feature into the app with ActionMailer and robust backend logics.                                    
                    </li>
                </ul>
                <div className="portfolio-detail__divider" />
                <div className="portfolio-detail__links">
                    <a href="https://github.com/zrk8856/shopping-app" className="button button--flex button--small portfolio__button">
                        GitHub Repo
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                    <a href="https://shopping-app-react-ruby.herokuapp.com/" className="button button--flex button--small portfolio__button">
                        Deployed Version
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                    <a href="/portfolio-1" className="button button--flex button--small portfolio__button">
                        Video Demo
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioOne
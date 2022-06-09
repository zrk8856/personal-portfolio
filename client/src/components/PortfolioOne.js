import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import imagePortfolio1 from '../images/portfolio1-1.png'
import imagePortfolio11 from '../images/portfolio1-2.gif'
import imagePortfolio12 from '../images/portfolio1-3.gif'
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
                        <img src={imagePortfolio1} alt="" className="portfolio-detail__img-img" />                            
                    </div>
                    <h2 className="section__title portfolio-detail-title">Signup page</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio11} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Matching</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio12} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Chating</h2>
                </SwiperSlide>
            </Swiper>
            <div className="portfolio-detail__body">
                <p className="section__subtitle portfolio-detail-subtitle">A dating app allowing users to view 
                    other users' profiles, chat with matched users and get notifications in real time.
                </p>
                <ul className="portfolio-detail__ul">
                    <li>
                        Built backend with Ruby on Rails with complex custom methods for handling database manipulation.
                    </li>                                
                    <li> 
                        Implemented frontend and backend validations to avoid bad data being written into the database.                                   
                    </li>                                
                    <li>
                        Applied advanced CSS like flexbox and grid to layout the interface and optimize for various screen sizes.
                    </li>
                    <li>
                        Integrated ActionCable into the app allowing users to chat with each other and get notified in real time.                                    
                    </li>
                </ul>
                <div className="portfolio-detail__links">
                    <a href="https://github.com/zrk8856/dating-app" className="button button--flex button--small portfolio__button">
                        GitHub Repo
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                    <a href="https://dating-app-react-ruby-on-rails.herokuapp.com/" className="button button--flex button--small portfolio__button">
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
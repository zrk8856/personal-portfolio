import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import imagePortfolio31 from '../images/portfolio3-1.gif'
import imagePortfolio32 from '../images/portfolio3-2.gif'
import imagePortfolio33 from '../images/portfolio3-3.gif'
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
                        <img src={imagePortfolio31} alt="" className="portfolio-detail__img-img" />                            
                    </div>
                    <h2 className="section__title portfolio-detail-title">Search and Filtering</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio32} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Sorting</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio-detail__img">                        
                        <img src={imagePortfolio33} alt="" className="portfolio-detail__img-img" />
                    </div>
                    <h2 className="section__title portfolio-detail-title">Movie Detail</h2>
                </SwiperSlide>
            </Swiper>
            <div className="portfolio-detail__body">
                <p className="section__subtitle portfolio-detail-subtitle">An app utilizing a public API to fetch
                    and display detailed information about released and unreleased Marvel movies.
                </p>
                <ul className="portfolio-detail__ul">
                    <li>
                    Applied routes using React Router to create a single page application.
                    </li>                                
                    <li> 
                    Implemented sorting, filtering and searching functionalities into the application.                                   
                    </li>                                
                    <li>
                    Applied debounce techniques to optimize the app's performance.
                    </li>
                </ul>
                <div className="portfolio-detail__divider" />
                <div className="portfolio-detail__links">
                    <a href="https://github.com/zrk8856/mcu-movies" className="button button--flex button--small portfolio__button">
                        GitHub Repo
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                    <a href="https://mcu-movies-react.herokuapp.com/" className="button button--flex button--small portfolio__button">
                        Deployed Version
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                    <a href="https://drive.google.com/file/d/1o9ZfdGMb36muoLIJXpd1TDvv4qh48pTz/view?usp=sharing" className="button button--flex button--small portfolio__button">
                        Video Demo
                        <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioOne
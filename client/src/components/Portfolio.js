import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import imagePortfolio1 from '../images/portfolio1.png'
import imagePortfolio2 from '../images/portfolio2.jpg'
import imagePortfolio3 from '../images/portfolio3.jpg'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>            

            <div className="portfolio__container container">
                <Swiper           
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        {/* ==================== PORTFOLIO 1 ==================== */}
                        <div className="portfolio__content grid">
                            <img src={imagePortfolio1} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Dating App</h3>
                                <p className="portfolio__description">A dating app allowing users to view 
                                    other users' profiles, chat with matched users and get notifications in real time.  
                                </p>
                                <Link to="/portfolio-1" className="button button--flex button--small portfolio__button">
                                    See Details
                                    <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* ==================== PORTFOLIO 2 ==================== */}
                        <div className="portfolio__content grid">
                            <img src={imagePortfolio2} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Brand Design</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions</p>
                                <a href="#" className="button button--flex button--small portfolio__button">
                                    Demo
                                    <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* ==================== PORTFOLIO 3 ==================== */}
                        <div className="portfolio__content grid">
                            <img src={imagePortfolio3} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Online Store</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions</p>
                                <a href="#" className="button button--flex button--small portfolio__button">
                                    Demo
                                    <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio
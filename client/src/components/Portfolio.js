import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import portfolio1 from '../images/portfolio1.jpg'
import portfolio2 from '../images/portfolio2.jpg'
import portfolio3 from '../images/portfolio3.jpg'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                            <img src={portfolio1} alt="" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions</p>
                                <a href="#" className="button button--flex button--small portfolio__button">
                                    Demo
                                    <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* ==================== PORTFOLIO 2 ==================== */}
                        <div className="portfolio__content grid">
                            <img src={portfolio2} alt="" className="portfolio__img" />

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
                            <img src={portfolio3} alt="" className="portfolio__img" />

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
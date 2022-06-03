import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import testimonial1 from '../images/testimonial1.jpg'
import testimonial2 from '../images/testimonial2.jpg'
import testimonial3 from '../images/testimonial3.jpg'
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Testimonial() {
    return (
        <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container">
                <Swiper           
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}                    
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        {/* ==================== TESTIMONIAL 1 ==================== */}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={testimonial1} alt="" className="testimonial__img" />

                                <div>
                                    <h3 className="testimonial__name">Sara Smith</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                            </div>
                        </div>
                        <p className="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* ==================== TESTIMONIAL 2 ==================== */}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={testimonial2} alt="" className="testimonial__img" />

                                <div>
                                    <h3 className="testimonial__name">Matt Robinson</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                            </div>
                        </div>
                        <p className="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* ==================== TESTIMONIAL 1 ==================== */}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={testimonial3} alt="" className="testimonial__img" />

                                <div>
                                    <h3 className="testimonial__name">Raul Harris</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                                <FontAwesomeIcon icon={faStar} className="testimonial__icon-star" />
                            </div>
                        </div>

                        <p className="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.</p>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
  )
}

export default Testimonial
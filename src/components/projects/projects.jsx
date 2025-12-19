import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './projects.scss';

import arrowLeft from '../../assets/img/arrow-left.svg';
import arrowRight from '../../assets/img/arrow-right.svg';
import apartament1 from '../../assets/img/img1.jpg';
import apartament2 from '../../assets/img/img2.jpg';
import apartament3 from '../../assets/img/img3.jpg';

const projectSlider = [{
    id: 1,
    title: "APARTMENT 55.6 M²",
    text: "The main idea of this interior is to create a bright, light, and cozy space. Warm colors and soft lines are used throughout the design to evoke a sense of calm and harmony.",
    description: "FOR A YOUNG COUPLE OF LAWYERS",
    image: apartament1,
},
    {
        id: 2,
        title: "The house",
        description: "For a family of doctors",
        text: "A comfortable space for the homeowners is ensured through proper organization and planning of the house. The open terrace seamlessly connects the pool, kitchen, and living areas.",
        image: apartament2,
    },
    {
        id: 3,
        title: "Country House",
        description: "For a family of entrepreneurs",
        text: "During the project development, a layout was created featuring an open kitchen-living area with a centrally placed fireplace that serves as a spatial divider.",
        image: apartament3,
    },
    {
        id: 4,
        title: "Country House",
        description: "For a family of entrepreneurs",
        text: "During the project development, a layout was created featuring an open kitchen-living area with a centrally placed fireplace that serves as a spatial divider.",
        image: apartament3,
    }]

const Projects = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) {
            swiperRef.current = new Swiper('.project__slider', {
                // Основные параметры
                loop: false, // Сначала попробуйте без loop
                slidesPerView: 1,
                spaceBetween: 30,

                // Навигация
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // Пагинация
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // Скроллбар
                scrollbar: {
                    el: '.swiper-scrollbar',
                },

                // Ключевой параметр для одинаковой высоты
                autoHeight: true, // Автоматическая высота

                // Адаптивность
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },

                // Обновление Swiper при изменении контента
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
            });

            console.log('Swiper initialized successfully');
        }

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy(true, true);
                swiperRef.current = null;
            }
        };
    }, []);

    return (
        <section className="projects section-box">
            <div className="container">
                <h2 className="projects__title section__title">
                    Our Projects
                </h2>
                <div className="project__slider swiper">
                    <div className="swiper-wrapper">
                        {projectSlider.map((item) => (
                            <div className="swiper-slide" key={item.id}>
                                <div className="project__item">
                                    <img src={item.image} alt={item.title} className="project__item-image"/>
                                    <h3 className="project__item-title">{item.title}</h3>
                                    <p className="project__item-description">{item.description}</p>
                                    <p className="project__item-text">{item.text}</p>
                                    <a href="#" className="project__item-link">more</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Пагинация */}
                    <div className="swiper-pagination"></div>

                    {/* Кнопки навигации */}
                    <div className="swiper-button-prev">
                        <img src={arrowLeft} alt="Previous"/>
                    </div>
                    <div className="swiper-button-next">
                        <img src={arrowRight} alt="Next"/>
                    </div>

                    {/* Скроллбар */}
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
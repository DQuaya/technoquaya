import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Training.css';

function Training() {
  return (
    <div className='slider-container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                <SwiperSlide>
                    <img src='https://www.pngkit.com/png/detail/141-1415464_css3-and-html5-logos-and-wordmarks-html5-css3.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://beebom.com/wp-content/uploads/2020/12/HTML-Javascript-CSS-shutterstockjpg.jpg' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://localo.com/assets/img/definitions/what-is-bootstrap.webp' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://lh5.googleusercontent.com/proxy/jTBHn3KcKBlECZl4wpDhvjwpY9BEVU9t2km3dUR3ikng4IuLRhO23qlFW3GvUScEZtoIT765X0otWUaR2EyNbTfLrp_b4QTJhlQuyn_KmsCEjgHbl3XUrj8D8g' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQri-mDYzW73PoXZ-ki3brt7xcySv111X6OJQ&s' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://images.squarespace-cdn.com/content/v1/57c649658419c2380d1947be/1534825375055-OA4431YN1BZ93RTAEIZF/postman-tile.png?format=1500w' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.pinimg.com/736x/f4/fc/33/f4fc33f67975e35e797b944b9a2a55dd.jpg' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://everyday.codes/wp-content/uploads/2019/06/react-native-1024x631-1024x631.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://xano.ghost.io/content/images/2022/09/when-is-it-best-to-use-a-restful-api.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://miro.medium.com/v2/resize:fit:900/1*ZIWWlLt8O9w3-spKcqI4mA.png' alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.jpg' alt="burger" />
                </SwiperSlide>

                <div className='slider-controler'>
                    <div className='swiper-button-prev'>
                        <ArrowLeft size={20} />
                    </div>
                    <div className='swiper-button-next'>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </Swiper>
        </div>
  );
}

export default Training;


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Card from '../card/Card';

import './SwiperNav.css';

import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function SwiperNav({ cards }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            navigation={{
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            coverflowEffect={{
                rotate: 50,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                scale: 1,
            }}
            className="w-full"
            loop={true}
            autoHeight
            grabCursor
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index} className="">
                    <Card className="">
                        {card}
                    </Card>
                </SwiperSlide>
            ))}

            <Button variant="text" className="swiper-button-prev">
                <NavigateBeforeIcon className="swiper-button-icon" />
            </Button>

            <Button variant="text" className="swiper-button-next">
                <NavigateNextIcon className="swiper-button-icon" />
            </Button>
        </Swiper>
    )
}

export default SwiperNav;
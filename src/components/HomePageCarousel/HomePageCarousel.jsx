import Slider from 'react-slick'
import ProductsStyle from './HomePageCarousel.module.css'
import { useEffect, useState } from 'react'
import { HomeCard } from '../HomeCard/HomeCard'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from '../../hooks/useFetch'


export function HomePageCarousel(){
    const productsUrl = 'https://fakestoreapi.com/products'

    const settings = {
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
        ]
    }

    const {data: products} = useFetch(productsUrl)

    return (
        <>
            <Slider {...settings}>
                {
                    products?.map((product => (
                        <HomeCard key={product.id} product={product}/>
                    )))
                }
            </Slider>
        </>
    )

}
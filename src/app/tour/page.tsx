'use client'

import TourCard from '@/components/Card/Tour'
import HeroBanner from '@/components/Home/Banner'
import { tourList, TourDetail } from '@/data'
import React from 'react'

const listTour = tourList.slice(0, 7)

const page = () => {
    console.log(listTour);

    return (
        <div>
            <HeroBanner height='h-[60vh] md:h-[70vh]' imageUrl='/Tour/0.jpg' title='Vietnam Tour Packages' subtitle='Want to plan your own Vietnam Tour Packages with help of local travel experts?' />
            <div className='grid grid-cols-3 gap-4 px-16 my-24'>
                {listTour.map((tour: TourDetail, index) => (
                    <div key={index} >
                        <TourCard tour={tour} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
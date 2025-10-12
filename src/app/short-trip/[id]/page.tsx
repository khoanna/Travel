'use client'

import TourCard from '@/components/Card/Tour'
import HeroBanner from '@/components/Home/Banner'
import { TourDetail, tourList } from '@/data'
import { usePathname } from 'next/navigation'
import React from 'react'

const index = [
    {
        params: "/short-trip/ha-noi",
        start: 6,
        end: 13
    }
]

const ShortTripPage = () => {
    const path = usePathname();
    const obj = index.find(i => i.params === path)
    const listTour = tourList.slice(obj?.start, obj?.end)

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

export default ShortTripPage
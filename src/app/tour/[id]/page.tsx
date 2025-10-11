'use client'

import { TourDetail, tourList } from '@/data';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const param = useParams();
    const tourData = tourList.find((tour:TourDetail) => String(tour.id) == String(param?.id) )
    console.log(tourData);
        
    return (
        <div>page</div>
    )
}

export default page
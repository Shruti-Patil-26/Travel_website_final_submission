import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/trendingTours'
import { Col } from 'reactstrap'
const TopTrendingTourList = () => {
  return (
<>
{
    tourData.map(tour => (
        <Col lg='3'className='mb-4' key={tour.id}>
            <TourCard tour={tour} />
        </Col>
    ))
}
</>
  )
}

export default TopTrendingTourList
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Testimonial.css'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([
        {
          id: 1,
          author: 'John Doe',
          position: 'CEO, ABC Inc.',
          text: "Their professionalism and efficiency were truly impressive. From start to finish, they handled our electrical work with expertise, leaving us highly satisfied. I wouldn't hesitate to recommend them for any electrical needs.",
        },
        {
          id: 2,
          author: 'Jane Smith',
          position: 'Designer, XYZ Corp.',
          text: "Working with them was a breeze. Not only were they courteous and knowledgeable, but they also showed a genuine commitment to safety and quality. It was a pleasure having them handle our project.",
        },
        {
          id: 3,
          author: 'Jane Smith',
          position: 'Designer, XYZ Corp.',
          text: 'The fire extinguisher installation they did for us was top-notch. Their attention to detail and professionalism were evident throughout the process. I feel much safer knowing that our property is now equipped properly.',
        },
        {
          id: 4,
          author: 'Jane Smith',
          position: 'Designer, XYZ Corp.',
          text: "I can't thank them enough for their outstanding service. They were prompt, efficient, and went above and beyond to ensure everything was done right. I wouldn't hesitate to use their services again in the future.",
        },
        {
          id: 5,
          author: 'Jane Smith',
          position: 'Designer, XYZ Corp.',
          text: "Choosing them for our project was definitely the right decision. They were responsive, dedicated, and delivered results that exceeded our expectations. I highly recommend them to anyone in need of quality service.",
        },
        // Add more testimonials as needed
      ]);
    
      const [slidetoShow, setSlideToShow] = useState(2)
      useEffect(() => {
        const handleResize = () => {
          window?.innerWidth <= 1024 ? setSlideToShow(1) : setSlideToShow(2)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidetoShow,
        slidesToScroll: 1,
        prevArrow: <ArrowBack />,
        nextArrow: <ArrowForward />,
      };
  return (
    <div className='testimonials'>
    <h2>Testimonials</h2>
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-author">{testimonial.author}</p>
          <p className="testimonial-position">{testimonial.position}</p>
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Testimonial

import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import '../Slider/style.css'


import image1 from '../../assets/img/slot1.png'
import image2 from '../../assets/img/slot3.png'
import image3 from '../../assets/img/slot2.png'
import image4 from '../../assets/img/slot4.png'

const images = [image1, image2, image3, image4]


const Slider = () => {
const carousel = useRef()
const [width, setWidth] = useState(0)

useEffect(() => {

setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])

  return (


    <div className='carrousel' >
        
   
   <motion.div ref={carousel} className='container-carousel' whileTap={{ cursor: 'grabbing' }}>
    <motion.div 
    className='inner'
    drag='x'
    dragConstraints={{ right: 0, left: -width}}
    initial={{ x:100}}
    animate={{ x: 0 }}
    transition={{ duration: 0.8 }}
    >
      {images.map(image =>(
        <motion.div className='item' key={image}>
          <img src={image} />
          </motion.div>
      ))}

    </motion.div>

   </motion.div>
   </div>
    
  )
}

export default Slider

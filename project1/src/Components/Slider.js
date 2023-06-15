import React, { useEffect, useState } from 'react'
import '../styles/slider.css'

const img1 ='https://files.codingninjas.in/codekaze-5-27236.jpg'
const img2 ='https://files.codingninjas.in/coding-event-mobile-27602.jpg'
const img3 ='https://files.codingninjas.in/coding-event-mobile-27234.jpg'
const img4 = 'https://files.codingninjas.in/bitblitz-mobile-27825.png'
const img5 ='https://files.codingninjas.in/artboard-9-2x-8-2-25888.png'
const img6 = 'https://files.codingninjas.in/mobile-46-27780.jpg'

const Slider = () => {
    const [img, setimg] = useState(0);

    const [allImg] = useState([img1, img2, img3, img4, img5, img6])
    useEffect(() => {
        setInterval(()=>{
            setimg(img => img < 5 ? img + 1 : 0)
        },2500)
        
    },[])

    return (
        <>
<img className='imgslide' src={allImg[img]} alt="Error!!" />
        </>
    )
}

export default Slider
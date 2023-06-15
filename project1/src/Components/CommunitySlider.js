import React, { useEffect, useState } from 'react'
import '../styles/slider.css'
import img7  from '../Assests/problemofTheDay.jpg'
import img5  from '../Assests/Screenshot.png'
import img6 from '../Assests/code_battels.jpg'

const img1 ='https://files.codingninjas.in/codekaze-5-27236.jpg'
const img2 ='https://files.codingninjas.in/coding-event-mobile-27602.jpg'
const img3 ='https://files.codingninjas.in/home-explore-gradient-17415.png'
const img4 = 'https://files.codingninjas.in/bitblitz-mobile-27825.png'
const CommunitySlider = () => {
    const [img, setimg] = useState(0);

    const [allImg] = useState([img1, img2, img3, img4, img5, img6, img7])
    useEffect(() => {
        setInterval(()=>{
            setimg(img => img < 7 ? img + 1 : 0)
        },4500)
        
    },[])

    return (
        <>
<img className='imgslide2' src={allImg[img]} alt="Error!!" />
        </>
    )
}

export default CommunitySlider
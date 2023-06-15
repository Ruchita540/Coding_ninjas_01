import React from 'react'

import '../styles/CoursesAdded.css'

const CoursesAdded = (props) => {
  return (
    

        <div className='CousersFlexItems'>
            <h2>{props.value.category}</h2>
            <h2>{props.value.courseName}</h2>
        </div>



   
  )
}

export default CoursesAdded
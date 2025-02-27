import React from 'react'
const BenefitCard = ({img, title, description}) => {
  return (
    <div className='benifit-card'>
      {img}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default BenefitCard
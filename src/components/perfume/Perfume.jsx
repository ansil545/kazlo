import React from 'react'
import './Perfume.css'
import perfume from'../../Assets/icons/pERFUME.jpg'

function Perfume() {
  return (
    <div className='perfumecontainer'>
<div className='perfumehead'>
<img className='perfumeimg' src={perfume}
  />
<div className='perfumedesc'>
  <div className='title-para'>
    <h5 className='perfume-tilte' >New and Exclusive</h5>
    <p className='perfume-para'>The resurfacing treatment gently exfoliatsfor smooth clarified and deeply replenished skin</p>
    </div>
</div>


</div>

    </div>
  )
}

export default Perfume
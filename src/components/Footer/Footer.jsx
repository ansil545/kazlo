import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  return (
    <div className='footer'>
        <div className='footerhead'>
<div>
    <h5 className='footertitle'>customer service</h5>
    <p className='desc'>contact us </p>
    <p className='desc'> order status</p>
    <p className='desc'>
        shipping
    </p>
    <p className='desc'> Gift cards</p>
    <p className='desc'> FAQ</p>
    <p className='desc'> Product Recalls</p>
    <p className='desc'> return and policy exchanges</p>
   
</div>
<div>
    <h5 className='footertitle' >About us</h5>
    <p className='desc'>All brands</p>
    <p className='desc'>careers</p>
    <p className='desc'> get email updates</p>
    <p className='desc'> the thread</p>
</div>
<div> <h5 className='footertitle'>stores and services</h5>
<p className='desc'>Find store</p>
<p className='desc'> free style help</p>
<p className='desc'> pop in shop</p>
<p className='desc'> virtual events</p>

</div>
<div>
    <h5 className='footertitle'>nordstrom inc</h5>
<p className='desc'>Nordstrom Rack</p>
<p className='desc'> investors relation</p>
<p className='desc' > press release</p>
<p className='desc'>Media Network</p>

</div>
<div>
<h5 className='footertitle'>Follow us</h5>
<FacebookIcon/>
<InstagramIcon/>
<PinterestIcon/>
</div>
        </div>
    </div>
  )
}

export default Footer
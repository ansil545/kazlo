import React from 'react';
import "./Secondintro.css";

function Secondintro() {
  return (
    <div className='secondintro'>
      <div className='colored-background'>
        <div className='flex-container'>
          {/* Replace these image URLs with your actual image sources */}
          <img src='https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='Image 1' />
          <img src='https://media.istockphoto.com/id/1365602991/photo/elegant-young-man-wearing-white-winter-coat.webp?b=1&s=170667a&w=0&k=20&c=UFSSiHwffhohW5MnJiW5pHbF2jlpkG5gdgULmbLjGX0=' alt='Image 2' />
          <img src='https://media.istockphoto.com/id/824872662/photo/black-t-shirt-on-brick-background.jpg?s=612x612&w=0&k=20&c=dt10eMrwBih4c3cFhvAstdlBo_ibefXDUeZGGurrlpQ=' alt='Image 3' />
          <img src='https://media.istockphoto.com/id/673929544/photo/close-up-of-rolled-colorful-clothes-on-black-background.jpg?s=612x612&w=0&k=20&c=n5s9Im7w2gd59py9WNLpgtqNpyd-HpLHEvQpNhswaY8=' alt='Image 4' />
        </div>
      </div>
    </div>
  );
}

export default Secondintro;

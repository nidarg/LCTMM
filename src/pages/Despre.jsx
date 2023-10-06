import React from 'react'
import aboutImage from '../assets/aboutImage.png'
import firstimage from '../assets/firstimage.jpeg'
import image2 from '../assets/image2.jpeg'
import { styled } from 'styled-components'

const Despre = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div
          className='box-1'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${aboutImage})`,
            backgroundSize: 'cover',
          }}
        >
        
          <p className='title'>LemnConstructiiTimisMaraMures</p>
         
            <p className='despre'>
              <span>Santem</span> o afacere de familie de omenie cu peste 20 de ani de
              experienta in domeniul prelucrarii lemnului.
              <br />
              Livram lemn rasinos prelucrat in functie de comenzi pentru
              depozite, constructori, fabrici, persoane fizice si alte tipuri de
              activitati in domeniu
              </p>
         
        </div>
        <div
          className='box-2'
          style={{
            backgroundImage: `url(${firstimage})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className='box-3'
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
// @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');
font-family: 'Fondamento', cursive;
  .container {
    width:100%;
    gap: 1rem;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'a a'
      'a a'
      'b c';
  }
  .box-1 {
    color: var(--primary-200);
    font-size: clamp(1.3rem, 1.5vw, 1.5rem);
   padding:0 2rem;
    grid-area: a;
    height:60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    line-height: 1.5;
  
  }
  .title{
    font-size:1.3rem;
  }
  .despre{
    text-align: justify;
    text-justify: inter-word;
  }
  span{
    padding-left:1rem;
  }
  .box-2 {
    grid-area: b;
    // display: block;
  }
  .box-3 {
    grid-area: c;
    // display: block;
  }






  @media (min-width: 768px) {
    .container {
      gap: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 40vh);
      grid-template-areas:
        'a a b'
        'a a c';
    }

    .box-1 {
      grid-area: a;
      height: 80vh;
      font-size: clamp(1.5rem, 2vw, 2rem);
    }
    .box-2 {
      grid-area: b;
      display: block;
    }
    .box-3 {
      grid-area: c;
      display: block;
    }

    .text {
      width: 60%;
      margin: 0 auto;
      height: 100%;
      color: var(--primary-200);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: space-around;
      line-height: 1.5;
      font-size: clamp(1.5rem, 2vw, 2rem);
    }
    .main-title{
      font-size: clamp(1.5rem, 2vw, 2rem);
    }
   
  }
`

export default Despre

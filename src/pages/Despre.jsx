import React from 'react'
import aboutImage from '../assets/aboutImage.png'
import firstimage from '../assets/firstimage.jpeg'
import image3 from '../assets/image3.jpeg'
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
          <div className='text'>
            <p>
              Santem o afacere de familie de omenie cu peste 20 de ani de
              experienta in domeniul prelucrarii lemnului.
            </p>
            <p>
              {' '}
              Livram lemn rasinos prelucrat in functie de comenzi pentru
              depozite, constructori, fabrici, persoane fizice si alte tipuri de
              activitati in domeniu
            </p>
          </div>
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
            backgroundImage: `url(${image3})`,
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .box-1 {
    height: 80vh;
  }
  .box-2,
  .box-3 {
    display: none;
  }
  .text {
    width: 90%;
    margin: 0 auto;
    height: 100%;
    color: var(--primary-200);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    line-height: 1.5;
    font-size: clamp(1.2rem, 1.5vw, 1.5rem);
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
    .box-2 {
      grid-area: b;
      display: block;
    }
    .box-3 {
      grid-area: c;
      display: block;
    }
  }
`

export default Despre

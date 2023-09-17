import React from 'react'
import {Link, useRouteError} from 'react-router-dom'
import img from '../assets/page-not-found.svg'
import styled from 'styled-components'

const Error = () => {

  const error = useRouteError()
  if(error.status === 404){
    return (
      <Wrapper>
        <div>
          <img src={img} alt="page not found" />
          <h3>Ohh!</h3>
          <p>Pagina cautata nu exista!</p>
          <Link to='/'>Back Home</Link>
        </div>
      </Wrapper>
   )
  }
  else{
    return(
      <>
      <h1>
        Something went wrong!!!
      </h1>
      <Link to='/'>Back Home</Link>
      </>
    )
  }
} 

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h3{
    margin-bottom:.5rem;
  }

  p{
    line-height: 1.5;
    margin-top: .5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  a{
    color: var(--primary-500);
    text-transform: capitalize;
  }

`

export default Error

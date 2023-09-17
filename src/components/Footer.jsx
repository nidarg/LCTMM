import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
    <div className='footer'>
      <p>&copy;2023 LCTM</p>
      <p>GG</p>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.footer{
    flex-direction: column;
    min-height: 5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:var(--white);
    color:var(--primary-500);
    font-weight:700;
}

`

export default Footer

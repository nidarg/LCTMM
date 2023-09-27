import React, {useState,useRef} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import clop from '../assets/clop1.jpg'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
    const[showLinks, setShowLinks] = useState(false)

    const toggleLinks = () =>{
        setShowLinks(!showLinks)
    }

  return (
    <Wrapper>
        <div className="nav-center">
            <div className="nav-header">
                <span className="logo"><img src={clop}/></span>
                <button className="nav-toggle" onClick={toggleLinks}>
                    <FaBars/>
                </button>
            </div>
           {showLinks &&(
                <div className="nav-links">
                <NavLink to='/' className='nav-link'>
                    Home
                </NavLink>
                {/* <NavLink to='/' className='nav-link'>
                    Despre
                </NavLink> */}
                <NavLink to='/materiale-lemn-constructii' className='nav-link'>
                    Lemn Constructii
                </NavLink>
                <NavLink to='/lemn-foc-peleti' className='nav-link'>
                    Lemn de Foc
                </NavLink>
                <NavLink to='/contact' className='nav-link'>
                    Contact
                </NavLink>
            </div>

           )}
           </div>
            
    </Wrapper>
  )
}

const Wrapper = styled.nav`

    background: white;
    .nav-center{
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
    }

    .nav-header{
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }

    .nav-toggle{
        font-size: 1.5rem;
        color: var(--primary-500);
        background: transparent;
        border-color: transparent;
        transition: var(--transition);
        cursor: pointer;
    }

    .logo{
        font-size: clamp(1rem, 1.5vw, 2rem);
        color: var(--primary-500);
        font-weight: 700;
        letter-spacing: 2px;
    }

    .logo img{
        width:6rem;
    }
    
    .nav-links{
        display:flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: 1rem;
    }
    .nav-link{
        color: var(--grey-900);
        padding: .5rem 1rem .5rem 0;
        transition: var(--transition);
        letter-spacing: 2px;
    }

    // .nav-link:hover{
    //     color: var(--primary-500);
    //     transform: translateX(.5rem);
    //     transform: scale(1.1);
    //     font-weight:500;
    // }

    .active{
        color: var(--primary-600);
        font-weight:500;
        transform: translateX(.5rem);
        transform: scale(1.1);
        }

    @media (min-width: 768px){
        .nav-center{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
           
        }

        .nav-toggle{
            display: none;
        }

        .nav-links{
            flex-direction: row;
            margin-top:0;
        }
        .nav-link:hover{
            color: var(--primary-500);
            transform: scale(1.1);
            font-weight:500;
        }
        .logo{
            font-size:2.5rem;
        }
    }

`

export default Navbar

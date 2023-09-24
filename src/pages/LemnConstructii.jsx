import React from 'react'
import{useFetchItems} from '../fetchItems'
import styled from 'styled-components'

const LemnConstructii = () => {
  const {loading, items} = useFetchItems()


  if(loading){
    return(
      <div className="container">
        <h2>Loading ...</h2>
      </div>
    )
  }

return(
  <Wrapper>
      <div className='container'>
        {items.map((item)=>{
          return(
            <div key={item.id} className="item">
            <img className="image" src={item.img}/>
            <p className="title">{item.title}</p>
            <p className="price">{item.price} RON/mc</p>
          </div>
          )
          
        })}
       
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .contrainer{
    max-width:90vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    // gap-row:3rem;
    // gap-col:3rem;
  }
  .item{
    // max-width:30rem;
    width: 90vw;
    height:20rem;
    background:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    box-shadow:var( --shadow-4);
    margin:2rem;
  }
  .image{
max-height: 70%;
width:80%;
  }
.title{
  font-size:1.4rem;
  text-transform:capitalize;
  weight:700;
  color:var(--primary-500);
}
.price{
  font-size:1rem;
  weight:700;
  color:var(--primary-500);
}

  @media (min-width: 376px) {
    .container {
      padding-top:10rem;
     display: flex;
     justify-content: space-around;
     align-items:center;
     flex-wrap:wrap;
    }

    .item{
      max-width:30rem;
    }

   
  }
`
export default LemnConstructii

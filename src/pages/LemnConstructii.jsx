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
    <>
      <div className="text">
        <p>Preturile sunt negociabile in functie de cantittatea comandata</p>
        <p>Asiguram transport in orice zona a tarii</p>
      </div>
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
    </>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container{
    max-width:90vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
  }
  .item{
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
.text{
  margin:2rem auto 0;
  color:var(--primary-500);
  font-size:1rem;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

  @media screen and  (min-width: 376px) {
    .container {
      padding-top:10rem;
     display: flex;
     justify-content: space-around;
     align-items:center;
     flex-wrap:wrap;
    }

    .text{
      font-size:1.4rem;
    }

    .item{
      max-width:30rem;
    }
  }
`
export default LemnConstructii

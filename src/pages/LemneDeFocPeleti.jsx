import React from 'react'
import{useFetchItems} from '../fetchItems'
import styled from 'styled-components'
import transportImage from '../assets/transport.jpeg'

const LemnDeFocPeleti = () => {
  const {loading, items1} = useFetchItems()


  if(loading){
    return(
      <div className="container">
        <h2>Loading ...</h2>
      </div>
    )
  }

return(
  <Wrapper>
    <div className='layout'>
      <div className="text" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${transportImage})`,
            backgroundSize: 'cover',
          }}>
        <p>Preturile sunt negociabile in functie de cantitatea comandata  <br />
        Asiguram transport in orice zona a tarii</p>
      </div>
      <div className='container'>
        {items1.map((item)=>{
          return(
            <div key={item.id} className="item">
            <img className="image" src={item.img}/>
            <p className="title">{item.title}</p>
            <p className="price">{item.price1}</p>
          </div>
          )
          
        })}
       
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.layout {
  display:flex;
  // max-width:100%;
  flex-direction:column;
  justify-content:space-around;
  align-items: center;
}
  .container {d
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
  }
  .item{
    width: 90vw;
    height:10rem;
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
  font-size:1.2rem;
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
  width: 90vw;
  height:30rem;
  font-size:1.3rem;
  color:var(--primary-300);
  font-size:1rem;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  
}
.text p{
  text-align: justify;
  text-justify: inter-word;
  padding:0 1rem;
}

@media screen and (min-width: 600px) {
  .container {
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    flex-wrap:wrap;
    }

    .text{
      font-size:1.4rem;
      min-width: 100vw;
    }

    .item{
      height: 20rem;
      max-width:30rem;
    }
  }
`
export default LemnDeFocPeleti

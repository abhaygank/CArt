import React, {useState} from 'react'
import SHOE from './SHOE.avif'
import WATCH from './WATCH.jpg'
import WWATCH from './WWATCH.jpg'

const Varieties = () => {
    const [count,setCount] =useState(0);
const increment=()=>
{
setCount(count +1);
};

const decrement =() =>
{
  if(count>=1)
  {
    setCount(count-1);
  }
}
    const products=
    [
        {
            id:1,
            name:'SHOE',
            price:'$200',
            qty:0,
            imge:SHOE
        },
        {
            id:2,
            name:'MENS WATCH',
            price:'$100',
            qty:0,
            imge:WATCH
         },
        {
            id:3,
            name:'WOMENS WATCH',
            price:'$150',
            qty:0,
            imge:WWATCH
        }
    ];
  return (
    <>
    {products.map((product, index)=>(
        <div key={product.id}>
        <h3>Name:{product.name}</h3>
        <p>Price:{product.price}</p>
        <p>Quantity:{product.qty}</p>
        <p><img src={product.imge} alt='img' className='imgStyle' width="200px" heigth="300px"/></p>
        <button className='btn' onClick={increment}>+</button>          
          <button className='btn' onClick={decrement}>-</button>          
          <p>Quantity:{count}</p>
        </div>
    ))}
    </>
  );
};

export default Varieties
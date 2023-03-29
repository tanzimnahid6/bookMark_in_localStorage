import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const Card = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('product.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-3 p-8 gap-5'>
            {
                products.map((product)=><SingleCard key={product.id} product={product}></SingleCard>)
            }
        </div>
    );
};

export default Card;
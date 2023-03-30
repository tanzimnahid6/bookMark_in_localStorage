import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const Card = () => {
    const [products,setProducts] = useState([])
    const [showAll,setShowAll] = useState(false)
    useEffect(()=>{
        fetch('product.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-3 p-8  gap-5'>
            {
                products.slice(0,showAll ? 6 : 3).map((product)=><SingleCard key={product.id} product={product}></SingleCard>)
            }
            {
                !showAll && <button onClick={()=>setShowAll(true)} className='btn btn-primary text-center'>Show ALL</button>
            }
        </div>
    );
};

export default Card;
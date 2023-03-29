import React from 'react';

const SingleCard = ({product}) => {
    // console.log(product);
    const {id,name,price,image} = product

    const addBookMark = (id,name,price)=>{
        const productDetails = {id,name,price}
        const bookMark = [];
        const previousBookMarked = JSON.parse(localStorage.getItem('Book-Mark'))
        if(previousBookMarked){
            const saved = previousBookMarked.find((product)=>product.id===id)
            if(saved){
                handleAlert('Ops allready exits') 
            }else{
                previousBookMarked.push(productDetails)
                console.log(previousBookMarked);
                localStorage.setItem('Book-Mark',JSON.stringify(previousBookMarked))
            }
        }else{
            bookMark.push(productDetails)
            localStorage.setItem('Book-Mark',JSON.stringify(bookMark))
        }
        
    }
    const removeBookMark = (id)=>{
        const exitsItem = JSON.parse(localStorage.getItem('Book-Mark'))


        if(exitsItem && exitsItem.length!==0){
            const filtredItem = exitsItem.filter(item=>item.id!=id)
            localStorage.setItem('Book-Mark',JSON.stringify(filtredItem))  
        }else if(exitsItem && exitsItem.length===0){
            handleAlert('Allready removed all')
        }
        else{
            handleAlert('vai kissu nai,ki remove korbo')
        }
    }
//show us alert
    const handleAlert = (msg)=>{
        alert(msg)
    }
    return (
        <>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img className='w-64' src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl text-red-500'>Price:{price}</p>
                    <div className="card-actions justify-between">
                        <button onClick={()=>addBookMark(id,name,price)} className="btn btn-primary">Book Mark</button>
                        <button onClick={()=>removeBookMark(id)} className="btn btn-warning">Remove From BookMark</button>
                    </div>
                </div>
             </div>
        </>
    );
};

export default SingleCard;
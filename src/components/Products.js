import React, { useState,useEffect } from 'react'
import { add } from './store/cartSlice'
import { useDispatch ,useSelector } from 'react-redux'
import {fetchProducts} from './store/productSlice'
import { STATUSES } from './store/productSlice'


const Products = () => {
  const dispatch = useDispatch()
  // const [products,setProducts] = useState([])
  const {data:products,status} = useSelector((states)=>states.product)

  useEffect(()=>{

    dispatch(fetchProducts())

    // const fetchProducts = async ()=>{
    //   const response = await fetch('https://fakestoreapi.com/products')
    //   const data = await response.json()
      
    //   setProducts(data)

    // }
    // fetchProducts()

  },[])

  const addHandler = (product)=>{
    dispatch(add(product))



  }

  if(STATUSES.LOADING === status){
    return <h2> loading...</h2>
  }

  return (
    <div className='productsWrapper'>
        {
          products.map((items)=>(
            <div className='card' key={items.id}>
           <img src={items.image} />
           <h4>{items.title}</h4>
           <h5>{items.price}</h5>
           <button className='btn' onClick={()=>addHandler(items)}>Add to Cart</button>
            </div>
          )
          
           
           
          )

        }

    </div>
  )
}

export default Products
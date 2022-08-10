
import { useEffect, useState } from 'react';
import Pagenation from './pages';
//const axios = require("axios");${props.category}
import "./style.css"
import Popup from './popup';

const Products=(props)=>{
    const [product,setProducts]=useState([])
    const length=props.category.length
    const [currentpage, setCurrentpage]=useState(1)
    const [posts,setposts]=useState(4)
    useEffect(()=>{
    if(length===0){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }else{
        fetch(`https://fakestoreapi.com/products/category/${props.category}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
    }
    },[length])
    const indexoflastpost=currentpage*posts
    const indexoffirstpost=indexoflastpost-posts
    const currentpost=product.slice(indexoffirstpost,indexoflastpost)
    const pagenate=(num)=>{
        setCurrentpage(num)
    }

    return (
        <>
            <div className='main-page'>
            {
            currentpost.map((data)=>{
                return (
                    <div className="my-div">
                    <img src={data.image} alt=''/>
                    <Popup product={data}/>
                    </div>
                )
            })
            }
            <Pagenation posts={posts} totalposts={product.length} pagenate={pagenate} />
            </div>
        </>
    )   
}

export default Products
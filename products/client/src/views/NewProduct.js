import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router'


export default function NewProduct(){
    const [products, setProducts] = useState([])
    const [hasError, setHasError] = useState([]) //used in previous lecture
    const [errors, setErrors] = useState(null)  
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect (() => {
        axios.get('http://localhost:8002/api/products',)
        .then(response => setProducts(response.data))
        .catch(() => setHasError(true))
         
    }, [])


    function handleSubmit (event){
        event.preventDefault()
        //console.log('submitted form')
        axios.post('http://localhost:8002/api/products', {
            title,
            price,
            description
        })
        .then(() => navigate('/processing'))  // '/products'
        //.catch(console.log)
        .catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err.response)
        })
    
    }

    function handleDelete (id){
        axios.delete('http://localhost:8002/api/products/' + id )
        .then(() => setProducts(products.filter(product => product._id != id)))

    }

    return (
        <div class="new-prd" >
            <h2 class="is-size-4"> Product manager: </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>

                    <input 
                        class="input"
                        name="title"
                        value= {title}
                        onChange= {e => setTitle(e.target.value)}
                    />
                    {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is called optional chaining, NEW feature in JS */}
                        {errors?.title?.properties?.message}
                        </span>
                        )}

                </div>
                <div>
                    <label>Price: </label>
                    <input 
                        class="input"
                        name="price"
                        value= {price}
                        type="number"
                        onChange= {e => setPrice(e.target.value)}
                    />
                        {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is called optional chaining, NEW feature in JS */}
                        {errors?.price?.properties?.message}
                        </span>
                        )}
                </div>
                <div>
                    <label>Description: </label>
                    <input 
                        class="input"
                        name="description"
                        value= {description}
                        onChange= {e => setDescription(e.target.value)}
                    />
                    {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is called optional chaining, NEW feature in JS */}
                        {errors?.description?.properties?.message}
                        </span>
                        )}
                </div>
                <div class="control">
                <button class="button is-primary">Submit</button>
                </div>
            </form>
            <hr></hr>
            <h2 class="is-size-4">All Products: </h2> 
               <ul class="all-prd">
                {products.map(product => (
                    <li key={product._id}><Link to={product._id} class="all-title">{product.title}</Link>
                    <button class="button is-primary" onClick={() => navigate(product._id + '/edit')}>Edit</button>
                    
                    <button class="button is-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>

                ))}
               </ul>

        </div>       
    )

}
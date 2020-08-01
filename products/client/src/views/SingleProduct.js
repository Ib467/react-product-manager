import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

export default function SingleProduct(props){
    const [product, setProduct] = useState (null)

    useEffect (() => {
        axios.get('http://localhost:8002/api/products/'+ props.id)
        .then(response => setProduct(response.data))
    }, []);

    if(product == null) return 'Loading...'


    function handleDelete (id){
        axios.delete('http://localhost:8002/api/products/' + id )
        .then(() => navigate('/'))

    }

    return (
        <div>
            <h2> Title: </h2>
            <p> {product.title}</p>
            <h2> Price: </h2>
            <p> {product.price}</p>
            <h2> Description:</h2>
            <p> {product.description}</p>
            <button onClick={() => handleDelete(product._id)}>Delete</button>

        </div>
    )

}
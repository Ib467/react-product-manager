import React, {useEffect, useState} from 'react';
import exios from 'axios';
import {navigate} from '@reach/router'
import axios from 'axios';

export default function EditProduct({id}){
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState(null) // new erros

    useEffect (() => {
        axios.get('http://localhost:8002/api/products/' + id)
        .then(response => {
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
    });
}, [id])


    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8002/api/products/' + id, {
            title,
            price,
            description
        })
        .then(() => navigate('/'))
        // .catch(console.log)
        .catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err.response)
        })
    }



    return (
        <div class="edit-prd"><p class="is-size-4">Edit Item Page: </p> 
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
            



        </div>
    )



}
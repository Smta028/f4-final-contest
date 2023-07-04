import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
function Details() {

    const {id} = useParams();
    const data = useSelector(state => state.saveData);
    const [post , setPost] = useState({});
    
    useEffect(()=>{
        const obj = data[parseInt(id)-1];
        setPost(obj);
    },[])

    return (
        post && 
        <div className='selected-post'>
            <h2>Details Page For Post With ID {id}</h2>
            <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
            <p>User ID : {post.id} </p>
            <p>Title : {post.title} </p>
            <p>Body : {post.body} </p>
        </div>
        
    );
}

export default Details;
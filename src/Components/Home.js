import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchDataRequest , fetchDataSuccess , fetchDataFailure , saveData} from '../redux/actions/apiActions';

function Home() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchDataRequest());
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            dispatch(fetchDataSuccess(data));
            dispatch(saveData(data));
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    },[]);

    const {  data } = useSelector(state => state.data);

    return (
        
        <div className='post-container' >
            {
                data.map(post =>
                    <div key={post.id} className='post'  onClick={()=>{navigate(`/item/${post.id}`)}}   >
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                        <div className='data'>
                            <p>User ID : {post.id} </p>
                            <p>Title : {post.title.slice(0,15)} </p>
                            <p>Body : {post.body.slice(0,150)} </p>
                            <p>Read More...</p>
                        </div>
                    </div>
                )
            }
        </div>
        
    );
}

export default Home;
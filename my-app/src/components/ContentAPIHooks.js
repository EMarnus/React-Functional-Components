import React, { useEffect, useState } from 'react';
import css from "./css/Content.module.css";
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';


export default function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        fetchImages()
    },[])

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        // console.log(response)
        setIsLoaded(true)
        setPosts(fetchedPosts)
        setSavedPosts(fetchedPosts)
    }

    const handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(inputText)
        })
        setPosts(filteredPosts)
    }
    
    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchinput'>Search: </label>
                    <input
                    onChange={(event) => handleChange(event)}
                    id='searchinput'
                    name='search'
                    type='search' />
                </form>
                <h4>posts found: {posts.length}</h4>
            </div>
            <div className={css.SearchResaults}>
            {
                isLoaded ? <PostItemAPI savedPosts={posts}/> : <Loader/>
            }
            </div>
        </div>
    )
}

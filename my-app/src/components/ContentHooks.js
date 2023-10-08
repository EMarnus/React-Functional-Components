import React, {useState, useEffect} from 'react';
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

export default function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedPosts, setFetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts)
        }, 2000)
    },[])
    
    const handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(inputText)
        })
        setFetchedPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchinput'>Search: </label>
                        <input
                        onChange={(event) => {handleChange(event)}}
                        id='searchinput'
                        name='search'
                        type='search' />
                    </form>
                    <h4>posts found: {fetchedPosts.length}</h4>
                </div>
                <div className={css.SearchResaults}>
                {
                    isLoaded ? <PostItem savedPosts={fetchedPosts}/> : <Loader/>
                }
                </div>
            </div>
    )
}


// export class Content extends Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//             isLoaded: false,
//             posts: [],
//         }
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 isLoaded: true,
//                 posts: savedPosts
//             })
//         }, 2000)
//     }

//     handleChange = (event) => {
//         const inputText = event.target.value.toLowerCase()
//         const filteredPosts = savedPosts.filter(post => {
//             return post.name.toLowerCase().includes(inputText)
//         })
//         this.setState({
//             posts: filteredPosts
//         })
//     }

//     render() {
//         return (
//             <div className={css.Content}>
//                 <div className={css.TitleBar}>
//                     <h1>My Photos</h1>
//                     <form>
//                         <label htmlFor='searchinput'>Search: </label>
//                         <input
//                         onChange={(event) => this.handleChange(event)}
//                         id='searchinput'
//                         name='search'
//                         type='search' />
//                     </form>
//                     <h4>posts found: {this.state.posts.length}</h4>
//                 </div>
//                 <div className={css.SearchResaults}>
//                 {
//                     this.state.isLoaded ? <PostItem savedPosts={this.state.posts}/> : <Loader/>
//                 }
//                 </div>
//             </div>
//         )
//     }
// }

// export default Content
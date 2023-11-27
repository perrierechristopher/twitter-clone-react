import React, { useEffect } from 'react'
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function Feed() {
    const [posts, setPosts] = React.useState([]);
    // run based on a given condition, run when the feed component loadsvalue of a promise
    // Don't run in again after
    useEffect(() => {
        const getPosts = async () => {
        const postsSnapshot = await getDocs(collection(db, "posts"));
        setPosts(postsSnapshot.docs.map((doc) => {
            return (doc.data())
            }));
        }
        
        getPosts();
        
    }, []);


  return (
    <div className='feed'>
       {/*Header*/}
       <div className='feed__header'>
        <h2>Home</h2>
       </div>

       {/* TweetBox */}
       <TweetBox />


       {/* Post */}
       {posts.map((post) => 
        <Post 
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar} 
            image={post.image}
            />
       )}

    </div>
  )
}

export default Feed
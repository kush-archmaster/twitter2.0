import React, { useState,  useEffect} from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './css/feed.css';
import db from './firebase';
import FlipMove from 'react-flip-move';



const Feed = () => {

    //creating a state for retrieving data from db
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
         //whenever feed component loads
         db.collection('posts').onSnapshot(snapshot => (
             setPosts(snapshot.docs.map((doc)=> doc.data()))  //gives back an array fo docs
         ))
        
// eslint-disable-next-line
    },[])

    return (
        <div className='feed'>
            <div className="feed_header">
                <h2>Home</h2>
            </div>
             
             <TweetBox />

             <FlipMove>
             {
                 posts.map((post,index)=>{
                  return   (
                    <Post 
                    key= {index}
                    displayName= {post.displayName}
                    username= {post.username}
                    verified = {post.verified}
                    text= {post.text}  
                    avatar= {post.avatar} 
                    image= {post.image}
                     /> 
                  )
                 })
             }
             </FlipMove>
         </div>
    )
}

export default Feed;

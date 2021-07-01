import React from 'react';
import './css/tweetbox.css';
import {Avatar,Button} from '@material-ui/core';
import { useState } from 'react';
import db from './firebase';


const TweetBox = () => {

    const[tweetMsg, setTweetMsg] = useState('');
    const[tweetImg, setTweetImg] = useState('');
    
    const sendTweet = (event) =>{
           event.preventDefault();
           //adding in db
           db.collection("posts").add({
            displayName: "Kushagra Upadhyay",
            username: "@kush-archmaster08",
            verified: true,
            text: tweetMsg,
            image: tweetImg,
            avatar: 'https://picsum.photos/seed/picsum/200/300'
              
          });

          setTweetMsg('');
          setTweetImg('');
    }

    return (
        <div className='tweetBox'>
           <form method='POST'>
               <div className='tweetBox-input'>
                  <Avatar src='https://picsum.photos/seed/picsum/200/300'/>

                  <input type="text" placeholder='Whats on your mind?'
                   onChange={(event)=> setTweetMsg(event.target.value)}  value={tweetMsg} />

               </div>
               <input className='tweetBox-inputImg'
                type="text" placeholder='Enter Image URL' 
                onChange= {(event)=> setTweetImg(event.target.value)}  value={tweetImg}
                />

               <Button className='tweetBox-tweetBtn'
                onClick={sendTweet} >
               Tweet</Button>
           </form>
        </div>
    )
}

export default TweetBox

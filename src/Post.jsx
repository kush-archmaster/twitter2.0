import React, {forwardRef} from 'react';
import './css/post.css';

import {Avatar} from '@material-ui/core';

//icons
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from "@material-ui/icons/Publish";
import { useState } from 'react';

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {

    const[like, setLike] = useState(false)

    const toggleIt = () =>{
        setLike(!like)
    }

    return (
        <div className='post' ref={ref}>
            <div className="post-avatar">
                <Avatar src={avatar} />
            </div>

            <div className="post-body">
                <div className="post-header">
                    <div className="headertxt">
                        <h3>{displayName}
                        <span className='post-username'>
                        { verified && 
                        <VerifiedUserIcon className='user-verified'/>}
        
                        {username}</span></h3>
                    </div>

                    <div className="post-headerDescription">
                    <p>{text} </p>
                    </div>
                </div>
            
            <img 
            src={image} alt=''
            />

            <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <button className='likebtn' onClick={toggleIt}>
            { like ?
             <FavoriteIcon fontSize='small' className='likecolor'/> 
             :<FavoriteBorderIcon fontSize="small" /> }</button>
            <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
    )
})

export default Post

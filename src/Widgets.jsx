import React from 'react';
import './css/widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";



const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets_input">
               <SearchIcon className="widgets_searchIcon" />
               <input placeholder="Search Twitter" type="text" />
            </div>
             
            <div className="widgets_container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1218440995731316736"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400 }}
                 />

                <TwitterShareButton
                  url={"https://www.instagram.com/k.u.s.h_tastic.08/"}
                   options={{ text: "#reactjs is awesome", via: "Kush-Archmaster" }}
                 />
            </div>

        </div>
    )
}

export default Widgets
 


import { Avatar, Button } from '@mui/material'
import React from 'react'
import './TweetBox.css'
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore/lite';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = React.useState("");
    const [tweetImage, setTweetImage] = React.useState("");

    const sendTweet = (e) => {
        e.preventDefault(); //prevent the refresh

        addDoc(collection(db, "posts"), {
            displayName: "Dany Chris",
            username: "DanyChris",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-icons-logos-emojis-users-2400.png&f=1&nofb=1&ipt=d05c147bf991baca14fca4b0d0e7b72db67c353d88db9e40b8cd4255e5513e81&ipo=images" 
        })

        setTweetMessage("")
        setTweetImage("")
    }

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-icons-logos-emojis-users-2400.png&f=1&nofb=1&ipt=d05c147bf991baca14fca4b0d0e7b72db67c353d88db9e40b8cd4255e5513e81&ipo=images"/>
                <input 
                onChange={(e) => {setTweetMessage(e.target.value)}}
                value={tweetMessage} 
                placeholder='What is happening ?' />
            </div>
            <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
        </form>

    </div>
  )
}

export default TweetBox
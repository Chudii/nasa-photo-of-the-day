import React, { useState, useEffect } from "react";
import "./App.css";
import Post from './Post/Post';
import axios from 'axios';

function App() {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=hLxXgb8vP8pH6a5YAqoHNj20mWgk0SFfYPTrAKXf`)
      .then(res => {
        console.log(res.data)
        setPostData(res.data);
      })
  },[])

  return (
    <div className="App">
      <Post post={postData} />
    </div>
  )
}

export default App;

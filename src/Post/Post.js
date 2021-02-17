import React from 'react';
import Info from '../Info/Info';
import './Post.css';

const Post = (props) => {
    const { post } = props;

    return (
        <div className='Post'>
            <img src={post.url} alt={post.title}/>
            <Info 
            title={post.title} 
            date={post.date}
            details={post.explanation}/>
        </div>
    );
}

export default Post;
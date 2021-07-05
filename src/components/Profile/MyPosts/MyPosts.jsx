import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how r u? ', likesCount: 12},
        {id: 2, message: 'My 1 post ', likesCount: 11},
        {id: 3, message: 'Hello ', likesCount: 111},
        {id: 4, message: 'OMG ', likesCount: 121},]

    let postsElement = posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;
import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
import Post from './Post';

const Blog = () => {

    const posts = [
        {
            title: "This is a 1st post",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"  
        },
        {
            title: "this is a second post",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
        }
    ];

    const [post, setPosts] = useState(posts)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then((data) =>{
            setPosts(data)
        })
    }, [])

    return (
        <Fragment>
            <marquee className="bg-primary text-light">This is a Blog Page. Data fetch form jsonplaceholder post api</marquee>
            <div className="container my-5">
                <div className="row">
                    
                    {
                        post.map( (data) => <Post postdata={data} /> )
                    }
                    

                </div>
            </div>
        </Fragment>
    )
}

export default Blog;

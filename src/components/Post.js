import React from 'react'

const Post = (post) => {
    return (
        <div className="col-md-6 my-2">
            <div className="card shadow ">
                <div className="card-header">
                    <h2 className="d-block text-truncate">{post.postdata.title}</h2>
                </div>
                <div className="card-body">
                    <span className="badge badge-info">UserId:{post.postdata.userId}</span>
                    <p className="d-block text-truncate">{post.postdata.body}</p>
                    <a className="btn btn-primary btn-sm text-light" href="#">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Post;

import React from 'react';
import './css/App.css';
import Popup from "reactjs-popup";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      post: props.post,
      user: props.user
    };
    console.log(props.post);
    console.log(props.user);
  }

  render() {
    const { error, isLoaded, post, user} = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>
            <Popup trigger={
                <div className="item">
                    <div className='postId'>{post.id}</div>
                    <div className='userId'>{post.userId}</div>
                    <div className='title'>{post.title}</div>
                </div>
            } position="bottom center" contentStyle={{width: 400, borderRadius: 25}} modal>
                {close => (
                    <div className="popup">
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        <h2>Post</h2>
                        <p><b>Id:</b> {post.id}</p>
                        <p><b>Title:</b> {post.title}</p>
                        <p><b>Body:</b> {post.body}</p>
                        <h2>Author</h2>
                        <p><b>Id:</b> {user.id}</p>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Username:</b> {user.username}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Phone:</b> {user.phone}</p>
                        <p><b>Website:</b> {user.website}</p>
                        <p><b>Company:</b> {user.company.name} {user.company.catchPhrase}</p>
                        <p><b>Address:</b> {user.address.suite} {user.address.city} {user.address.street}</p>
                    </div>
                )}
            </Popup>
        </div>
      );
    }

  }
}



export default Post;
import React from 'react';
import './css/App.css';
import Post from './Post';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      users: []
    };
  }

  async componentDidMount() {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET'});
    posts = await posts.json();
    let users = await fetch("https://jsonplaceholder.typicode.com/users", {method: 'GET'});
    users = await users.json();
    this.setState({
      isLoaded: true,
      posts,
      users
    });
  }

  render() {
    const { error, isLoaded, posts, users } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="main">
          <div className="caption">
            Welcome to the Frontend Developer Test App
          </div>
            <div className="itemHeader">
              <div className='postId'>
                Id
              </div>
              <div className='userId'>
                UserId
              </div>
              <div className='title'>
                Title
              </div>
            </div>
            {posts.map(post => (
              <Post post={post} user={users.find(x => x.id === post.userId)} key={post.id} />
            ))}
        </div>
      );
    }
  }
}



export default Main;

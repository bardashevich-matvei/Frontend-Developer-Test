import React from 'react';
import './css/App.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET'});
    data = await data.json();
    this.setState({
      isLoaded: true,
      items: data
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <table className="main">
          <caption className="caption">
            Welcome to the Frontend Developer Test App
          </caption>
          <tbody>
            <tr className="itemHeader">
              <td className='postId'>
                id
              </td>
              <td className='userId'>
                userId
              </td>
              <td className='title'>
                title
              </td>
            </tr>
            {items.map(item => (
              <tr className="item" key={item.id}>
                <td className='postId'>{item.id}</td>
                <td className='userId'>{item.userId}</td>
                <td className='title'>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}



export default Main;

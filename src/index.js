import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContentFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.getItems();
  }
  
  getItems() {
    fetch('http://localhost:3000/dogs')
      .then(results => results.json())
      .then(results => this.setState({'items': results}));
  }
  render() {
    return (
      <ul>
        {this.state.items.map(function(item, index) {          
          return (
            <div>
              <h1>{item.name}</h1>
              <h1>{item.id}</h1>
              <img src={item.image} alt="Image did not render" />
            </div>
            )
          }
        )}
      </ul>
    );
  }
}
ReactDOM.render(
  <ContentFeed />, 
  document.getElementById('root')
)

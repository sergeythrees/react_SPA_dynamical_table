import React, { Component } from 'react';
import Table from './Table/Table';

const DATA_URL = 'https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json';

class App extends Component {

  state = {
    isLoading: true,
    data: []
  }

  async componentDidMount() {
    const responce = await fetch(DATA_URL);
    const data = await responce.json();
    this.setState({
      isLoading: false,
      data: data
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.isLoading
            ? <div className="loadingIndicator">Loading...</div>
            : <Table data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;

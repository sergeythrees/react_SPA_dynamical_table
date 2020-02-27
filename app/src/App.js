import React, { Component } from 'react';
import Table from './Table/Table';
//import _ from 'lodash';

const DATA_URL = 'https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json';
const SORT_DIR = {
  INC: 1,
  DEC: -1
};

function sortByField(obj, fieldName, direction) {
  const compare = (a, b) => {
    let result = 0;
    if (a[fieldName] > b[fieldName])
      result = -1;
    if (a[fieldName] < b[fieldName])
      result = 1;

    return result * direction;
  };

  return obj.sort(compare);
};

class App extends Component {

  state = {
    isLoading: true,
    data: [],
    sort: {
      fieldName: "Name",
      direction: SORT_DIR.INC
    }
  }

  async componentDidMount() {
    const responce = await fetch(DATA_URL);
    const data = await responce.json();
    this.setState({
      isLoading: false,
      data: data
    })
    this.sortTable(this.state.sort.fieldName);
  }

  sortJsonByField = (fieldName) => {
    const compare = (a, b) => {
      let result = 0;
      if (a[fieldName] > b[fieldName])
        result = -1;
      if (a[fieldName] < b[fieldName])
        result = 1;

      return result * this.state.sort.direction;
    };

    this.setState({
      data: this.state.data.sort(compare)
    })
  }

  sortTable(fieldName) {
    const direction = this.state.sort.direction * -1;
    this.setState({
      data: sortByField(this.state.data, fieldName, direction),
      sort: {
        fieldName,
        direction
      }
    })
  }


  
  render() {
    return (
      <div className="container">
        {
          this.state.isLoading
            ? <div className="loadingIndicator">Loading...</div>
            : <Table 
            data={this.state.data}
            sortTable={this.sortTable.bind(this)}
            />
        }
      </div>
    );
  }
}

export default App;

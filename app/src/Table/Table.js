import React from 'react';

export default props => (
  <table className="table">
    <thead> 
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((item, index) => (
        <tr key={index}>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Company}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
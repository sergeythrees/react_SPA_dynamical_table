import React from 'react';

export default props => (
  <table className="table">
    <thead> 
      <tr>
        <th onClick={() => props.sortTable('Name')}>Name</th>
        <th onClick={() => props.sortTable('Email')}>Email</th>
        <th onClick={() => props.sortTable('Phone')}>Phone</th>
        <th onClick={() => props.sortTable('Company')}>Company</th>
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
import React from 'react';
import Campers from './Campers';

const Table = ({ campers }) => {
  console.log(campers);
  const Items = campers.map((camper, index) =>{
    return <Campers key={index} camper={camper} number={index+1}/>
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>UserName</th>
          <th>Last 30 days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {Items}
      </tbody>
    </table>
  )
}

export default Table

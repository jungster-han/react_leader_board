import React from 'react';

const Campers = ( { camper, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td><img src={camper.img}/><a href={`http://freecodecamp.com/${camper.username}`} target="_blank"> {camper.username} </a>
      </td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  )
}

export default Campers;

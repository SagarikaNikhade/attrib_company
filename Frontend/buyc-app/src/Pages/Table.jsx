import React from 'react'

const Table = ({kms,major_scratches,original_paint,number_of_accidents_reported,number_of_previous_buyers,registration_place
,image,title,description, price}) => {
  return (
    <div>
      <table style={{width:" 100%"}}>
        <thead>
          <tr style={{border: "1px solid black",padding: "8px"}}>
            <th>kms</th>
            <th>major_scratches</th>
            <th>original_paint</th>
            <th>number_of_accidents_reported</th>
            <th>number_of_previous_buyers</th>
            <th>registration_place</th>
            <th>image</th>
            <th>title</th>
            <th>description</th>
            <th> price</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{border: "1px solid black",padding: "8px"}}>
            <td>{kms}</td>
            <td>{major_scratches}</td>
            <td>{original_paint}</td>
            <td>{number_of_accidents_reported}</td>
            <td>{number_of_previous_buyers}</td>
            <td>{registration_place}</td>
            <td>{image}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{ price}</td>
        </tr>
        </tbody>
      </table>  
    </div>
  )
}

export default Table

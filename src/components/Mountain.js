import React from "react";

const Mountain = (props) => {
    let {id, name, mountains, height, coordinates} = props.list
    return ( 
        <tr key={id} style={{border: "1px solid black"}}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{height}</td>
        <td>{mountains}</td>
        <td>{coordinates}</td>
        </tr>
     );
}
 
export default Mountain;
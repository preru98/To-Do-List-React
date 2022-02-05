import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Item(props) {
  let initialStatusValue = props.item && props.item.status ? props.item.status  : null; 
  let initialColor = props.item && props.item.status && props.item.status === 'COMPLETED' ? itemColorArray[1]  : itemColorArray[0];
  const [status, setStatus] = useState(initialStatusValue);
  const [color, setColor] = useState(initialColor);

  const toggleStatus = async (itemId) => {
      let statusRequested = status.toUpperCase() === 'COMPLETED' ? "PENDING" : 'COMPLETED' ;
      
      const url = `http://localhost:3003/item/${itemId}`;

      const myHeaders = {"Content-Type": "application/json"}
  
      const raw = JSON.stringify({
        status : statusRequested
      });
      
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      };

      try{
          const response = await fetch(url, requestOptions);
          const json = await response.json();
          setStatus(json.status);
          let newColor = json.status === 'COMPLETED' ? itemColorArray[1]  : itemColorArray[0];
          setColor(newColor);
          console.log(status);
      } catch (error) {
          console.log("error", error);
      }

  }

  return <div>

    {
        (props.item && Object.keys(props.item).length!==0) ? 
 
        <div className = "card">
          <div className = "card-header">
              {priorityArray[props.item.priority]}
          </div>
          <div className = "card-body" style = {{backgroundColor: color}}>
              <h5 className = "card-title">{props.item.title}</h5>
              <p className = "card-text">{props.item.description}</p>
              <a href="#" className="btn btn-primary" onClick = { () => {toggleStatus(props.item._id)}}>{status}</a>
          </div>
        </div>

        : <h2>Kindly create one item to get started with this list!</h2>
    }

  </div>;
}

Item.propTypes = {
    item : PropTypes.object
};

let priorityArray = ['VERY HIGH', 'HIGH', 'MEDIUM', 'LOW', 'VERY-LOW'];
const itemColorArray = ['coral', 'lightgreen'];

export default Item;


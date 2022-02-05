import React from 'react';
import PropTypes from 'prop-types';


function Item(props) {
  return <div>

    {
        (props.item && Object.keys(props.item).length!=0) ? 
 
        <div className="card text-white bg-primary mb-3" style={{'max-width': '18rem'}}>
            <div className="card-header">{props.item.title}</div>
            <div className="card-body">
                <h5 className="card-title">{props.item.status}</h5>
                <p className="card-text">{props.item.description}</p>
            </div>
        </div>

        : <h2>Kindly create one item to get started with this list!</h2>
    }

  </div>;
}

Item.propTypes = {
    item : PropTypes.object
};

export default Item;


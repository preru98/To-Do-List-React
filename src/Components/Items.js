import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Item from './Item';
const propTypes = {
    items : PropTypes.array, 
    listId : PropTypes.string
};



const Items = (props) => {
    
    console.log(props);

    return <div>
            {
                (props.items && props.items.length) ? 
                        
                    props.items.map( (item) => {
                       
                        return <Item item = {item}></Item>
                        // return <div className = "card">
                        //         <div className = "card-header">
                        //             {priorityArray[item.priority]}
                        //         </div>
                        //         <div className = "card-body">
                        //             <h5 className = "card-title">{item.title}</h5>
                        //             <p className = "card-text">{item.description}</p>
                        //             <a href="#" className="btn btn-primary" onClick = {toggleStatus}>{item.status}</a>
                        //         </div>
                        // </div>
                    })
                        
                :   <h3>Create one item in this list to get started! <Link to={`/${props.listId}/addItem`}>Add</Link></h3>
            }

    </div>;
}

Items.propTypes = propTypes;

export default Items;

let priorityArray = ['VERY HIGH', 'HIGH', 'MEDIUM', 'LOW', 'VERY-LOW'];

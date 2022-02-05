import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Items from './Items';
import ListForm from '../Pages/ListForm';

const propTypes = {
    allLists : PropTypes.array
};

const List = (props) => {
    const [currentlyOpenedListIndex, setCurrentlyOpenedListIndex] = useState(null);
    const [items, setItems] = useState(null);

    const fetchItemsofList = async listId => {
        console.log("LIST:::", listId);
        const url = `http://localhost:3003/list/${listId}/items`;
        console.log("LIST:::", url);
        try{
            const response = await fetch(url);
            const json = await response.json();
            setItems(json);
            console.log(json);
            console.log(items);
        } catch (error) {
            console.log("error", error);
        }

    }

    console.log(!!(props.allLists && props.allLists.length));
    return <div>
        <div className = "container">
            <h3>Lists</h3>
            {
                (props.allLists && props.allLists.length) ? 
                    props.allLists.map( (list, index) => {

                        return <div className="list-group" >
                            < div className="list-group-item active" style={{display: 'flex', justifyContent: 'space-between'}} onClick = { ()=> { console.log("?????",list._id) ; index === currentlyOpenedListIndex ? setCurrentlyOpenedListIndex(null) : setCurrentlyOpenedListIndex(index); fetchItemsofList(list._id)}}>
                                <span>
                                    {list.name}
                                </span>
                                <span>
                                   
                                    <Link to={`/${list._id}/addItem`} style = {{color: 'white'}}>Add</Link>
                                </span>
                            </div>
                            {
                                index === currentlyOpenedListIndex ? 
                                <>    
                                    <Items items = {items} listId = {list._id}  />
                                </>    
                                : ''
                            }
                        </div>
                    })
                : <h3>Kindly create one list to get started!  <Link to="/addList"> Add List</Link></h3>
            }
        </div>
    </div>;
}

List.propTypes = propTypes;


export default List;

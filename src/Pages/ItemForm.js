import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import baseURL from '../constants';



const ItemForm = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [status, setStatus] = useState(null);
    const [priority, setPriority] = useState(null);

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    const onChangeStatus = (event) => {
        console.log(event);
        console.log((event.target.value+""));
        setStatus(event.target.value);
    }
    const onChangePriority = (event) => {
        setPriority(event.target.value);
    }

    const submitForm = () => {
        const myHeaders = {"Content-Type": "application/json"}
    
        const raw = JSON.stringify({
          "priority": priority,
          "status": status,
          "title": title,
          "description": description,
          "listId": params.listId
        });
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw
        };
        
        fetch(`${baseURL}/item/`, requestOptions)
          .then(response => response.text())
          .then(result => {console.log(result)
            navigate('/');
          })
          .catch(error => console.log('error', error));
        
        
    }
    
    return <div>
        
        <form>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" onChange={onChangeTitle}></input>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <input type="description" className="form-control" id="description" onChange={onChangeDescription}></input>
            </div>
            <div className="mb-3">
                <label for="priority">Priority</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={onChangePriority}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

            <div className="mb-3">
                <input class="form-check-input" type="radio" name="status" id="statusPending" value="PENDING" onChange={onChangeStatus}></input>
                <label class="form-check-label" for="statusPending">
                PENDING
                </label>
            </div>

            <div className="mb-3">
                <input class="form-check-input" type="radio" name="status" id="completed" value="COMPLETED" onChange={onChangeStatus}></input>
                <label class="form-check-label" for="completed">
                COMPLETED
                </label>
            </div>
        </form>
        <button className="btn btn-primary" onClick={submitForm}>Submit</button>
    </div>;

}




const priorityArray = ['VERY HIGH', 'HIGH', 'MEDIUM', 'LOW', 'VERY-LOW'];
export default ItemForm;
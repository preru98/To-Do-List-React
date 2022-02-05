import React, { useState } from 'react';

const ListForm = () => {

    const [name, setName] = useState(null);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const submitForm = () => {
        const myHeaders = {"Content-Type": "application/json"}
    
        const raw = JSON.stringify({
          name : name
        });
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw
        };
        
        fetch("http://localhost:3003/list/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    return <div>
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="name" className="form-control" id="name" onChange={onChangeName}></input>
            </div>
        </form>
        <button className="btn btn-primary" onClick={submitForm} >Submit</button>
    </div>;

}




const priorityArray = ['VERY HIGH', 'HIGH', 'MEDIUM', 'LOW', 'VERY-LOW'];
export default ListForm;
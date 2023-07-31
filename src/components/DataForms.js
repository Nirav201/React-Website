import React from 'react'
import { useState } from 'react'

function DataForms() {

    const [formData, setFormData] = useState({
        userName: '',
        email: ''
    });

    const onChangeHandler = (event) =>{
        // console.log('>>>>>>event.traget.name', event, event.target.name, event.target.value)
        setFormData(()=>({
            ...formData, //old value new value sathe replace thay -> below line
            [event.target.name]: event.target.value
        }))
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='container'>
            <h1 className='my-5 text-center'>Form component</h1>
            <div className='form-main'>
                <form onSubmit={onSubmitHandler} action='#' >
                    <div className="mb-3">
                        <label  className="form-label">User Name</label>
                        <input type="text" className="form-control" id="userName" name="userName" placeholder="User Name" onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <input type='submit' value="Submit" />
                        {/* <button type='button'>Submit</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DataForms

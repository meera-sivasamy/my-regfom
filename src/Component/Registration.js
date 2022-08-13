import { Alert } from 'bootstrap';
import React, { useState } from 'react'

function Registration() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !email || !phone || !country || !city || !state || !message){
            <Alert color="primary" varient='danger'>
                    Please Fill Every Field
                </Alert>

            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify('email'));

            console.log("saved in local storage");
            setLogin(!login);
    
        }
    }

    function handleClick() {
        setLogin(!login)
    }

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Enter full name'
                    onChange={(event)=> setName(event.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Email'
                    onChange={(event)=> setEmail(event.target.value)}

                    />
                </div>

                <div className='form-group'>
                    <label>Mobile</label>
                    <input type='phone' 
                    className='form-control' 
                    placeholder='Enter contact no.'
                    onChange={(event)=> setPhone(event.target.value)}
                    />
                </div>
                
                <div className='form-group'>
                    <label>Country</label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Country'
                    onChange={(event)=> setCountry(event.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label>City</label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='City'
                    onChange={(event)=> setCity(event.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label>State</label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='State'
                    onChange={(event)=> setState(event.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label>Message</label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Message'
                    onChange={(event)=> setMessage(event.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-dark btn-lg btn-dark'>Register</button>

                <p onClick={handleClick}>Already Register</p>

            {flag && (
                <Alert color="primary" varient='danger'>
                    Please Fill Every Field
                </Alert>
            )}
            </form>
            
        </div>
    )
}

export default Registration
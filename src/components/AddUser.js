import React, { useState } from "react";
const AddUser = (props) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (event)=> {
        event.preventDefault();
        props.addUser({id:Math.floor(Math.random()*100+1), name:name, age: age});
    }
    const handleChangeInputName = (event) => {
        setName(event.target.value)
    }
    const handleChangeInputAge = (event) => {
        setAge(event.target.value)
         
    }

        return(
        <div className="wrapper">
            <form >
                <label>Your name: </label>
                <input  type="text" placeholder="Type your name...." onChange={(event) => handleChangeInputName(event)} ></input>
                <label>Your age:</label>
                <input  type="text" placeholder="Type your age..."  onChange={(event) => handleChangeInputAge(event)} ></input>
                <button onClick={(event) => handleSubmit(event)} type="submit">submit</button>
            </form>
        </div>
)
    }

export default AddUser;
import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUser from "./AddUser";
const MyComponent = () =>  {
    const [listUsers, setListUsers] = useState([
        {id: 1, name: 'Trung Quân', age: "20"},
        {id: 2, name: 'Hiền Hiền', age: "19"},
        {id: 3, name: 'Minh Khánh', age: "21"},
        
    ])
    const addUser = (userObj)=> {
        setListUsers([userObj,...listUsers]);
    }
    const handleDelete = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone);
    }
 
      return ( 
          <div className="wrapper">
            <AddUser addUser = {addUser} />
            <br />
            <DisplayInfo listUsers = {listUsers} handleDelete = {handleDelete}/>
          </div>
       )
}

export default MyComponent;
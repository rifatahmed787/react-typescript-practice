import React, { useContext } from 'react';
import { AuthContext } from './UserContext';

const Users = () => {
    const auth=useContext(AuthContext)

    const handleLogin=()=>{
       if(auth){
         auth.setUser({
            name:"Rifat",
            email:'rifat@gmail.com'
         })
       }
    }
    const handleLogout=()=>{
       if(auth){
        auth.setUser(null)
       }
    }
    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
            <h1>{auth?.user?.name}</h1>
            <h1>{auth?.user?.email}</h1>
        </div>
    );
};

export default Users;
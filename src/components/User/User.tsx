import { useState } from "react";

type AuthUser={
    name: string
    email: string
}

const User = () => {
    const [user, setUser]=useState<null | AuthUser>(null)
    const handelLogIn=()=>{
      setUser({
        name:"Rifat",
        email: "rifat@gmail.com"
      })
    }
    const handleLogOut=()=>{
           setUser(null)
    }
    return (
        <div>
            <button onClick={handelLogIn}>Log in</button>
            <button onClick={handleLogOut}>Log out</button>
            <p>{user ? "Logged Out" : "Logged In"}</p>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default User;
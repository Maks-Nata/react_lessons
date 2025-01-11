import {useEffect, useState} from "react";
import UserComponent from "../userComponent/UserComponent.tsx";
import {Itodos} from "../../models/todos.ts";


const UsersComponent = () => {
    const [users,setUsers]=useState<Itodos[]>([]);
    useEffect( ()=>{fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value=>value.json())
        .then(response=>{setUsers(response)});
        return ()=>{

        }},[])
    return (
        <div>
            {users.map((value) =><UserComponent  key={value.id} item={value}/>)}

        </div>
    );
};

export default UsersComponent;
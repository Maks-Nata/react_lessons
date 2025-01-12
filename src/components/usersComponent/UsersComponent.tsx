import {useEffect, useState} from "react";
import UserComponent from "../userComponent/UserComponent.tsx";
import {Itodos} from "../../models/todos.ts";
import {getUsers} from "../../services/api.services.ts";


const UsersComponent = () => {
    const [users,setUsers]=useState<Itodos[]>([]);
    useEffect(() => {
    getUsers()
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
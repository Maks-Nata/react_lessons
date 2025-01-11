import {Itodos} from "../../models/todos.ts";
import {FC} from "react";

type UserPropType={
   item:Itodos
}
const UserComponent:FC<UserPropType> = ({item}) => {
    return (
            <div>{item.title} </div>

    );
};

export default UserComponent;
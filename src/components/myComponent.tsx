import {FC} from "react";

type MyComponentPropType={text:string}
const MyComponent:FC<MyComponentPropType>=({text}:MyComponentPropType)=> {
    return <><div>{text}</div> </>
}
export default MyComponent;


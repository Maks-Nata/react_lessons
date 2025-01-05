import {FC} from "react";


type MyComponentPropType={text:string}
const MyComponent:FC<MyComponentPropType>=({text}:MyComponentPropType)=> {
    return <><div className={'text-3xl font-bold underline'}>{text}</div> </>
}
export default MyComponent;


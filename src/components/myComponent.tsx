import {FC} from "react";
import './myComponent.css'

type MyComponentPropType={text:string}
const MyComponent:FC<MyComponentPropType>=({text}:MyComponentPropType)=> {
    return <><div className={'target'}>{text}</div> </>
}
export default MyComponent;


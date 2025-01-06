import {ISimpsons} from "../modules/simpsons.ts";
import {ReactNode} from "react";
import './style_simpson.css'
interface CharacterComponentProps {
    item: ISimpsons;
    children:ReactNode;
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className={'wrapper'}>
            <img className={'foto'} src={item.photo} alt={item.surname}/>
            <div className={'container'}><h2>{item.name}.{item.surname}</h2>
                <h3>age:{item.age}</h3>
                <h3 className={'info'}>{children}</h3></div>
        </div>
    );
};

export default CharacterComponent;

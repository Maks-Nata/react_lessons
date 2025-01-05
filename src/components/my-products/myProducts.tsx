import {FC} from "react";
import {IProduct} from "../modules/product.ts";
import './myProducts.css'
type MyPropsType={
    product:IProduct;
}

const MyProducts:FC<MyPropsType> = ({product}) => {
    return (
        <div className={'wrapper'}>

                <h2 className={'title'}>{product.title}.{product.price} uah</h2>
                <img className={'photoProduct'} src={product.image} alt={product.title}/>

        </div>
    );
};

export default MyProducts;